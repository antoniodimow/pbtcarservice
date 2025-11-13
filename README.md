# Palm Beach Transportation Services

A professional, luxury transportation website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Luxury Design**: Navy & Gold color scheme with elegant typography (Playfair Display + Inter)
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Smooth Animations**: Powered by Framer Motion for professional, subtle interactions
- **Premium Components**: Custom UI components built with shadcn/ui
- **Fleet Showcase**: Interactive carousel displaying luxury vehicles
- **Service Pages**: Dedicated pages for Corporate, Executive, Events, and Airport services
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Optimized**: Fast loading with Next.js image optimization

## Pages Included

- **Homepage** - Hero, services overview, fleet showcase, testimonials, CTA
- **Services** - Landing page with all service categories
  - Corporate Travel
  - Executive Transport
  - Event Logistics
  - Airport Transfers
- **Fleet** - Filterable vehicle showcase with detailed specifications
- **About** - Company story, values, and statistics
- **Contact** - Contact information and inquiry form
- **FAQ** - Comprehensive frequently asked questions
- **Booking** - Placeholder for future booking system

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### Replacing Branding

1. **Logo**: Update the text in `components/layout/Header.tsx` and `components/layout/Footer.tsx`
   - Current: "Palm Beach"
   - Add your logo image in the `public/images/logos` directory

2. **Company Name**: Find and replace "Palm Beach Transportation Services" throughout the project

3. **Contact Information**:
   - Phone: Search for `(561) 555-1234` and replace
   - Email: Search for `info@palmbeachtransport.com` and replace
   - Address: Update in footer and contact page

### Updating Colors

Colors are defined in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#0A1828", // Deep Navy
    dark: "#050C14",
  },
  gold: {
    DEFAULT: "#C9A961", // Champagne Gold
    light: "#E5D4A5",
  },
  // ... other colors
}
```

### Replacing Images

Current images are from Unsplash. Replace with your own:

1. Add images to `public/images/` directories
2. Update image URLs in:
   - Homepage sections (`components/home/`)
   - Service pages (`app/services/`)
   - Fleet page (`app/fleet/page.tsx`)

### Adding/Editing Fleet Vehicles

Edit the `vehicles` array in `app/fleet/page.tsx`:

```typescript
{
  id: 1,
  name: "Your Vehicle Name",
  type: "Vehicle Type",
  image: "/path/to/image.jpg",
  capacity: 3,
  luggage: 2,
  amenities: ["WiFi", "Climate Control", ...],
  description: "Vehicle description",
  category: "sedan", // sedan, suv, or van
}
```

### Modifying Services

Service data is in:
- Homepage: `components/home/ServicesSection.tsx`
- Services landing: `app/services/page.tsx`
- Individual pages: `app/services/[service]/page.tsx`

### Updating Testimonials

Edit the `testimonials` array in `components/home/TestimonialsSection.tsx`

## Project Structure

```
palm-beach-transportation/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── booking/           # Booking page (placeholder)
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── fleet/             # Fleet showcase
│   ├── services/          # Services pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── home/             # Homepage sections
│   ├── layout/           # Header & Footer
│   ├── services/         # Service page components
│   └── ui/               # UI components (shadcn/ui)
├── lib/                   # Utility functions
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind configuration
```

## Tech Stack

- **Framework**: Next.js 15.0.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **Animations**: Framer Motion 12.x
- **Carousel**: Swiper
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Inter)

## Next Steps

### Immediate Customization

1. Replace all placeholder content with your actual information
2. Add your logo and professional vehicle photos
3. Update contact details (phone, email, address)
4. Customize color scheme if desired
5. Add real testimonials and reviews

### Future Enhancements

1. **Booking System**:
   - Integrate Supabase for database
   - Add Google Maps API for route calculation
   - Implement Stripe for payment processing
   - Create booking flow (pickup/dropoff, vehicle selection, payment)

2. **Additional Features**:
   - User authentication and accounts
   - Admin dashboard for managing bookings
   - Real-time vehicle tracking
   - Email notifications
   - Corporate account portal
   - Blog for SEO

3. **Deployment**:
   - Deploy to Vercel (recommended)
   - Set up custom domain
   - Configure environment variables
   - Enable analytics

## Performance

The site is optimized for:
- Fast initial page load
- Smooth animations and transitions
- Responsive images with Next.js Image optimization
- Code splitting and lazy loading
- SEO-friendly structure

## Support

For questions or issues:
1. Check the Next.js documentation: https://nextjs.org/docs
2. Review Tailwind CSS docs: https://tailwindcss.com/docs
3. Framer Motion docs: https://www.framer.com/motion/

## License

This project is proprietary. All rights reserved.

---

Built with care for Palm Beach Transportation Services
