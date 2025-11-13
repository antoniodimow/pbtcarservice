# Booking System Setup Guide

## Overview
Your booking system is now complete! It uses **Resend** (free email service) to send automated emails to customers and admins when someone requests a booking.

## What You Get

### 📋 Booking Form
- Full contact information collection
- Trip details (pickup, destination, date/time)
- Service type selection
- Passenger count
- Special requests field
- Mobile-responsive design

### 📧 Automated Emails
**Customer Email:**
- Professional confirmation that booking was received
- Summary of all booking details
- Clear next steps (you'll call them to confirm)
- Your contact information

**Admin Email (to info@pbtcarservice.com):**
- Urgent notification of new booking
- Customer contact info highlighted
- All trip details formatted for easy reading
- Action checklist for confirmation process

---

## Setup Instructions

### Step 1: Get Your Free Resend API Key

1. Go to https://resend.com/signup
2. Sign up with your email (free account)
3. Verify your email address
4. Go to API Keys section: https://resend.com/api-keys
5. Click "Create API Key"
6. Copy the key (starts with `re_...`)

### Step 2: Configure Your Domain (Optional but Recommended)

For emails to come from `@pbtcarservice.com` instead of `@resend.dev`:

1. In Resend dashboard, go to Domains
2. Click "Add Domain"
3. Enter: `pbtcarservice.com`
4. Follow the DNS configuration instructions
5. Add the DNS records to your domain provider

**Without domain setup:** Emails will come from `onboarding@resend.dev` (works fine for testing)

### Step 3: Add API Key to Your Project

**For local development:**
1. Create a `.env.local` file in your project root
2. Add this line:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

**For Vercel deployment:**
1. Go to your Vercel project settings
2. Navigate to Environment Variables
3. Add:
   - **Key:** `RESEND_API_KEY`
   - **Value:** Your Resend API key
   - **Environment:** Production, Preview, Development (select all)
4. Redeploy your site

### Step 4: Test the System

1. Go to your booking page: `/booking`
2. Fill out the form with test data
3. Use your real email to receive the customer notification
4. Check `info@pbtcarservice.com` for the admin notification

---

## How It Works

### User Flow:
1. Customer visits `/booking` page
2. Fills out the booking form
3. Clicks "Request Booking"
4. **Two emails are sent simultaneously:**
   - One to the customer's email
   - One to info@pbtcarservice.com
5. Customer sees success message
6. **You call the customer** to confirm and finalize booking

### Important Notes:
- ⚠️ **Booking is NOT confirmed** until you call the customer
- 📱 Customer email emphasizes you'll call them
- 🔔 Admin email urges action with highlighted contact info
- 💰 **No payment processing** - you discuss pricing on the phone
- 📊 **No database** - all info is in the emails

---

## Email Templates

### Customer Email Includes:
- Booking details summary
- "What Happens Next" section
- Your phone number to call
- Professional branding

### Admin Email Includes:
- **Large contact section** with customer's phone/email
- Complete trip details
- Special requests highlighted
- Timestamp of request
- Next steps checklist

---

## Free Tier Limits

**Resend Free Plan:**
- ✅ 100 emails per day
- ✅ 3,000 emails per month
- ✅ 1 custom domain
- ✅ Perfect for starting out

**If you exceed limits:**
- First 100 bookings/day are free
- After that, $20/month for 50,000 emails

---

## Troubleshooting

### Emails not sending?
1. Check your API key is correct in `.env.local` or Vercel
2. Check Resend dashboard for error logs
3. Verify you're not over the free tier limit

### Customer not receiving email?
1. Check their spam folder
2. Ask them to add your email to contacts
3. Consider verifying your domain (Step 2 above)

### Want to change email content?
- Edit `/app/api/booking/route.ts`
- Look for the `html:` sections in the email code
- Restart dev server after changes

---

## Future Enhancements (Optional)

Once you start getting bookings, you might want to add:
- Database to store booking history (Supabase/PostgreSQL)
- SMS notifications via Twilio
- Calendar integration (Google Calendar API)
- Automated pricing calculator
- Payment processing (Stripe)
- Admin dashboard to manage bookings

For now, the email-based system is perfect for getting started with zero ongoing costs!

---

## Support

**Resend Documentation:** https://resend.com/docs
**Your booking API:** `/app/api/booking/route.ts`
**Your booking form:** `/app/booking/page.tsx`

Need help? The code is well-commented and follows Next.js best practices.
