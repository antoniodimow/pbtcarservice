# PBT Car Service - Phase 2 Implementation Plan

## Overview
Add payment processing, database storage, and admin panel to the existing booking system.

## Key Requirements Summary
- **Pricing**: Distance-based at $3.50/mile (same for all vehicles initially)
- **Dead Miles**: Track driver's distance to pickup (hidden from driver, for business accounting)
- **Wait Time**: Built into price (30 min for airport pickups, 15 min for regular pickups)
- **Payment**: Stripe online only (required to confirm booking)
- **Database**: Supabase for all reservations
- **Admin Panel**: Simple view + status updates (confirmed/completed/cancelled)
- **Admin Auth**: Email + password via Supabase Auth

---

## Implementation Phases

### Phase 1: Supabase Setup & Database Schema

#### 1.1 Create Supabase Project
- Create project at supabase.com
- Get API keys (URL, anon key, service role key)

#### 1.2 Database Tables

```sql
-- Bookings table
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),

  -- Customer Info
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,

  -- Trip Details
  pickup_date DATE NOT NULL,
  pickup_time TEXT NOT NULL,
  pickup_address TEXT NOT NULL,
  dropoff_address TEXT NOT NULL,
  passenger_count INTEGER NOT NULL,
  vehicle_type TEXT NOT NULL,
  special_requests TEXT,

  -- Round Trip
  is_round_trip BOOLEAN DEFAULT FALSE,
  return_date DATE,
  return_time TEXT,

  -- Distance & Pricing (calculated via Google Maps API)
  trip_distance_miles NUMERIC(10,2),
  dead_miles NUMERIC(10,2),           -- Hidden from driver
  rate_per_mile NUMERIC(10,2) DEFAULT 3.50,
  trip_price NUMERIC(10,2),           -- What customer pays
  total_with_dead_miles NUMERIC(10,2), -- Internal tracking only

  -- Payment
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded')),
  stripe_payment_intent_id TEXT,

  -- Booking Status
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'in_progress', 'completed', 'cancelled')),

  -- Driver Assignment (Phase 3 ready)
  assigned_driver_id UUID REFERENCES users(id),  -- NULL in Phase 2 (single driver)

  -- Customer Account (for customer portal)
  customer_user_id UUID REFERENCES users(id),    -- Links booking to customer account

  -- Admin
  admin_notes TEXT
);

-- Users table (drivers, admins, and customers)
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  phone TEXT,
  role TEXT DEFAULT 'customer' CHECK (role IN ('customer', 'driver', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE
);

-- Drivers table (extra info for drivers - Phase 3 ready)
CREATE TABLE drivers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  license_number TEXT,
  vehicle_info TEXT,
  is_available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Pricing settings (for future flexibility)
CREATE TABLE pricing_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  vehicle_type TEXT UNIQUE NOT NULL,
  rate_per_mile NUMERIC(10,2) NOT NULL,
  minimum_fare NUMERIC(10,2) DEFAULT 25.00,
  is_active BOOLEAN DEFAULT TRUE,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default pricing
INSERT INTO pricing_settings (vehicle_type, rate_per_mile, minimum_fare) VALUES
  ('Luxury Sedan', 3.50, 25.00),
  ('Executive SUV', 3.50, 25.00),
  ('Luxury Van', 3.50, 25.00);
```

#### 1.3 Row Level Security (RLS)
```sql
-- Enable RLS
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Admin can see all bookings
CREATE POLICY "Admins can view all bookings" ON bookings
  FOR SELECT USING (
    auth.uid() IN (SELECT id FROM users WHERE role = 'admin' AND is_active = TRUE)
  );

-- Admin can update bookings
CREATE POLICY "Admins can update bookings" ON bookings
  FOR UPDATE USING (
    auth.uid() IN (SELECT id FROM users WHERE role = 'admin' AND is_active = TRUE)
  );

-- Service role can insert (for API)
CREATE POLICY "Service can insert bookings" ON bookings
  FOR INSERT WITH CHECK (TRUE);
```

#### 1.4 New Files
- `lib/supabase.ts` - Client initialization (browser + server)
- `lib/database.ts` - Helper functions for CRUD operations

---

### Phase 2: Distance Calculation & Pricing

#### 2.1 Google Maps Distance Matrix API
- Use existing `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- Calculate distance between pickup and dropoff
- For dead miles: will need driver's location (future feature) or use a base location

#### 2.2 Pricing Logic
```typescript
// lib/pricing.ts
const RATE_PER_MILE = 3.50;
const MINIMUM_FARE = 25.00;
const AIRPORT_WAIT_FEE = 15.00;  // Covers 30 min wait for airport pickups
const REGULAR_WAIT_FEE = 10.00;  // Covers 15 min wait for regular pickups

function calculatePrice(
  distanceMiles: number,
  isRoundTrip: boolean,
  isAirportPickup: boolean
): number {
  let price = distanceMiles * RATE_PER_MILE;

  // Add wait time fee (built into price)
  price += isAirportPickup ? AIRPORT_WAIT_FEE : REGULAR_WAIT_FEE;

  if (isRoundTrip) price *= 2;
  return Math.max(price, MINIMUM_FARE);
}
```

#### 2.3 Wait Time Policy
- **Airport pickups**: 30 minutes included (detected by address containing "Airport" or "PBI")
- **Regular pickups**: 15 minutes included
- Customer sees: "Price includes complimentary wait time"
- No separate line item - just built into total

#### 2.4 New API Route
- `POST /api/calculate-price` - Takes pickup/dropoff addresses, returns distance and price

---

### Phase 3: Stripe Payment Integration

#### 3.1 Dependencies
```bash
npm install stripe @stripe/stripe-js @stripe/react-stripe-js
```

#### 3.2 Environment Variables
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxx
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
```

#### 3.3 New API Routes
- `POST /api/payment/create-intent` - Create Stripe PaymentIntent with booking amount
- `POST /api/payment/webhook` - Handle Stripe webhooks (payment success/failure)

#### 3.4 Updated Booking Flow
1. Customer fills form
2. Click "Get Price" → API calculates distance & price
3. Display price to customer
4. Customer clicks "Pay & Book"
5. Stripe Elements modal appears
6. On successful payment:
   - Save booking to Supabase with `payment_status: 'completed'`
   - Send confirmation emails (customer + admin)
7. Redirect to success page

#### 3.5 New Components
- `components/booking/PriceCalculator.tsx` - Display calculated price
- `components/booking/PaymentForm.tsx` - Stripe Elements wrapper

---

### Phase 4: Admin Panel

#### 4.1 Routes Structure
```
/admin              → Redirect to /admin/login or /admin/bookings
/admin/login        → Login page
/admin/bookings     → Bookings list (main dashboard)
/admin/bookings/[id] → Individual booking details
```

#### 4.2 Admin Layout
- Simple sidebar with "Bookings" link
- Header with logout button
- Protected by auth middleware

#### 4.3 Bookings List Features
- Table with columns: Date, Time, Customer, Pickup → Dropoff, Vehicle, Status, Price
- Filter by status (pending/confirmed/completed/cancelled)
- Filter by date range
- Search by customer name/email
- Click row to view details

#### 4.4 Booking Details Page
- All booking information displayed
- Status update buttons (Confirm, Complete, Cancel)
- Admin notes field (save to database)
- **Driver sees**: Customer info, trip details, trip distance, price
- **Driver does NOT see**: Dead miles (internal business data only, stored in DB but not displayed in admin panel)

#### 4.5 New Files
```
app/admin/layout.tsx           - Protected layout with auth check
app/admin/page.tsx             - Redirect logic
app/admin/login/page.tsx       - Login form
app/admin/bookings/page.tsx    - Bookings table
app/admin/bookings/[id]/page.tsx - Booking details

components/admin/AdminLayout.tsx
components/admin/BookingsTable.tsx
components/admin/BookingDetails.tsx
components/admin/StatusBadge.tsx

lib/auth.ts                    - Auth helpers
middleware.ts                  - Protect /admin routes
```

---

### Phase 5: Updated Booking Form

#### 5.1 Modify `app/booking/page.tsx`
- Add "Calculate Price" step before payment
- Show distance and price to customer
- Integrate Stripe Elements for payment
- Handle payment success/failure states

#### 5.2 Modify `app/api/booking/route.ts`
- Change from email-only to:
  1. Save booking to Supabase
  2. Create Stripe PaymentIntent
  3. Return client_secret for payment
- Add separate endpoint for post-payment confirmation

---

## Database Tables Summary

| Table | Purpose |
|-------|---------|
| `bookings` | All reservation data, pricing, payment status |
| `users` | All users (customers, drivers, admins) |
| `drivers` | Extra driver info (Phase 3 ready) |
| `pricing_settings` | Configurable rates per vehicle (for future) |

---

## Environment Variables Needed

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx
SUPABASE_SERVICE_ROLE_KEY=eyJxxx

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxx
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# Existing
EMAIL_USER=pbtcarsevice@gmail.com
EMAIL_APP_PASSWORD=xxx
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=xxx
```

---

## Implementation Order

1. **Supabase Setup** (30 min)
   - Create project, get keys
   - Run SQL to create tables
   - Add env variables

2. **Database Integration** (1 hour)
   - Create `lib/supabase.ts`
   - Create `lib/database.ts`
   - Update booking API to save to DB

3. **Distance Calculation** (1 hour)
   - Create `lib/pricing.ts`
   - Create `POST /api/calculate-price`
   - Add Google Maps Distance Matrix call

4. **Stripe Integration** (2 hours)
   - Install packages, add keys
   - Create payment API routes
   - Add PaymentForm component
   - Update booking flow

5. **Admin Auth** (1 hour)
   - Create admin user in Supabase
   - Create login page
   - Add middleware protection

6. **Admin Dashboard** (2 hours)
   - Create bookings table page
   - Create booking details page
   - Add status update functionality

7. **Testing & Polish** (1 hour)
   - Test full booking flow
   - Test payment
   - Test admin panel

---

## Critical Files to Modify

| File | Changes |
|------|---------|
| `app/booking/page.tsx` | Add price display, payment integration |
| `app/api/booking/route.ts` | Save to Supabase, create PaymentIntent |
| `lib/email.ts` | Add customer confirmation email |
| `.env.local` | Add Supabase + Stripe keys |
| `package.json` | Add new dependencies |

## New Files to Create

| File | Purpose |
|------|---------|
| `lib/supabase.ts` | Supabase client |
| `lib/database.ts` | DB helper functions |
| `lib/pricing.ts` | Price calculation |
| `lib/auth.ts` | Auth helpers |
| `app/api/calculate-price/route.ts` | Distance & price API |
| `app/api/payment/create-intent/route.ts` | Stripe intent |
| `app/api/payment/webhook/route.ts` | Stripe webhook |
| `app/admin/*` | All admin pages |
| `components/admin/*` | Admin components |
| `components/booking/PaymentForm.tsx` | Stripe form |
| `middleware.ts` | Route protection |

---

## Customer Portal (Phase 2)

### Customer Features
- View all their bookings by entering email (no login required for Phase 2)
- See booking status, trip details, and payment confirmation
- `/my-bookings` page with email lookup

### Future (Phase 3): Full Customer Accounts
- Login with email/password
- `customer_user_id` field already in bookings table for linking

---

## Multi-Driver Support (Phase 3 - Database Ready Now)

### How It Will Work in Phase 3:
1. **Admin** (you) sees all bookings with full pricing info
2. **Admin** assigns a driver to a booking via `assigned_driver_id`
3. **Assigned Driver** logs in and sees ONLY:
   - Bookings assigned to them
   - Customer name, phone, pickup/dropoff, date/time
   - **Does NOT see**: Price, payment info, dead miles

### Database Already Prepared:
- `users` table with `role` field (customer/driver/admin)
- `drivers` table for driver-specific info
- `assigned_driver_id` in bookings table
- Ready for Phase 3 with no schema changes needed

### Phase 3 Admin Features (Driver Assignment):
- Admin panel will have "Assign Driver" dropdown on booking details
- Dropdown shows all users where `role = 'driver'` and `is_active = TRUE`
- Select driver → saves `assigned_driver_id` to booking
- Driver logs in → sees only their assigned bookings

### Phase 3 RLS Policies (to add later):
```sql
-- Drivers can only see their assigned bookings
CREATE POLICY "Drivers see assigned bookings" ON bookings
  FOR SELECT USING (
    assigned_driver_id = auth.uid()
  );

-- Drivers cannot see price columns (use a view instead)
CREATE VIEW driver_booking_view AS
SELECT
  id, customer_name, customer_phone,
  pickup_date, pickup_time, pickup_address,
  dropoff_address, passenger_count, vehicle_type,
  special_requests, status
FROM bookings;
-- Note: Price fields excluded from this view
```

---

## Future Enhancements (Phase 3+)
- Different rates per vehicle type
- Driver location tracking for accurate dead miles
- Full customer accounts with login
- Driver assignment & notifications
- SMS notifications
- Calendar integration
- Analytics dashboard
