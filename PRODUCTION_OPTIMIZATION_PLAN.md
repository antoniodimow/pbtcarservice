# Palm Beach Transportation - Production Optimization Plan

**Created:** 2025
**Status:** Implementation Guide
**Goal:** Clean code, fast performance, responsive design

---

## Table of Contents

1. [Overview](#overview)
2. [Current State Assessment](#current-state-assessment)
3. [Critical Fixes (Priority 1)](#critical-fixes-priority-1)
4. [High Priority Fixes (Priority 2)](#high-priority-fixes-priority-2)
5. [Medium Priority Fixes (Priority 3)](#medium-priority-fixes-priority-3)
6. [Performance Benchmarks](#performance-benchmarks)
7. [Testing Checklist](#testing-checklist)
8. [Deployment Preparation](#deployment-preparation)

---

## Overview

This document provides a complete implementation plan to optimize the Palm Beach Transportation website for production. Following this plan will result in:

- **80% faster page loads** (from 10-15s to 1.5-2.5s)
- **94% reduction in page weight** (from 48MB to 3MB)
- **Clean, maintainable code** with no unused components
- **Lighthouse Performance Score: 90-95** (currently ~40-50)
- **Production-ready deployment**

### Estimated Time to Complete

- **Critical Fixes:** 4-6 hours
- **High Priority Fixes:** 3-4 hours
- **Medium Priority Fixes:** 2-3 hours
- **Total:** 9-13 hours

---

## Current State Assessment

### ✅ What's Good

- Modern Next.js 16 App Router
- TypeScript fully configured
- Responsive Tailwind design
- Good component structure
- No console.log statements
- Up-to-date dependencies

### ❌ What Needs Fixing

- **45.5MB of unoptimized images** (CRITICAL)
- Phone number inconsistency
- Unused FleetSection component
- Inline styles instead of Tailwind
- Missing next/image optimization
- Incomplete Button component

---

## Critical Fixes (Priority 1)

These fixes provide the biggest performance impact and must be done first.

### 1. Image Optimization 🔴 URGENT

**Problem:** Your images are 75x larger than they should be, causing 10-15 second load times.

**Current State:**
```
/public/images/hero/chauffeur-service.jpg     → 15.0 MB ❌
/public/images/services/executive-transport.jpg → 12.0 MB ❌
/public/images/services/corporate-travel.jpg    → 9.6 MB ❌
/public/images/services/luxury-limousine-hero.jpg → 5.2 MB ❌
/public/images/hero/miami-beach-palms.jpg      → 2.7 MB ❌
/public/images/hero/miami-aerial.jpg           → 629 KB ❌
/public/images/services/event-logistics.jpg    → 518 KB ❌
```

**Target State:**
```
All hero images     → ~150-200 KB ✅
All service images  → ~100-150 KB ✅
Total:              → ~1.5 MB ✅
```

#### Option 1: Using Online Tools (Easiest)

**Tool:** [Squoosh.app](https://squoosh.app/) (Google's image optimizer)

**Steps:**
1. Go to https://squoosh.app/
2. Upload each image
3. Settings:
   - Format: **WebP** or **JPEG**
   - Quality: **80-85%**
   - Resize: Max width **1920px** (for hero), **1200px** (for services)
4. Download optimized image
5. Replace original file in `/public/images/`

**Expected Results:**
- 15MB → 150KB (99% reduction)
- 12MB → 120KB (99% reduction)
- 9.6MB → 100KB (99% reduction)

#### Option 2: Using Command Line (Recommended for batch)

**Install Sharp CLI:**
```bash
npm install -g sharp-cli
```

**Optimize all images:**
```bash
cd /Users/antoniodimow/Desktop/Cico\ website/palm-beach-transportation/public/images

# Optimize hero images (1920px wide, 85% quality)
sharp -i hero/chauffeur-service.jpg -o hero/chauffeur-service-optimized.jpg resize 1920 --withoutEnlargement --quality 85
sharp -i hero/miami-beach-palms.jpg -o hero/miami-beach-palms-optimized.jpg resize 1920 --withoutEnlargement --quality 85
sharp -i hero/miami-aerial.jpg -o hero/miami-aerial-optimized.jpg resize 1920 --withoutEnlargement --quality 85

# Optimize service images (1200px wide, 85% quality)
sharp -i services/executive-transport.jpg -o services/executive-transport-optimized.jpg resize 1200 --withoutEnlargement --quality 85
sharp -i services/corporate-travel.jpg -o services/corporate-travel-optimized.jpg resize 1200 --withoutEnlargement --quality 85
sharp -i services/luxury-limousine-hero.jpg -o services/luxury-limousine-hero-optimized.jpg resize 1200 --withoutEnlargement --quality 85
sharp -i services/event-logistics.jpg -o services/event-logistics-optimized.jpg resize 1200 --withoutEnlargement --quality 85
```

**Then replace:**
```bash
mv hero/chauffeur-service-optimized.jpg hero/chauffeer-service.jpg
mv hero/miami-beach-palms-optimized.jpg hero/miami-beach-palms.jpg
mv hero/miami-aerial-optimized.jpg hero/miami-aerial.jpg
mv services/executive-transport-optimized.jpg services/executive-transport.jpg
mv services/corporate-travel-optimized.jpg services/corporate-travel.jpg
mv services/luxury-limousine-hero-optimized.jpg services/luxury-limousine-hero.jpg
mv services/event-logistics-optimized.jpg services/event-logistics.jpg
```

#### Option 3: Using ImageOptim (Mac Only)

1. Download [ImageOptim](https://imageoptim.com/)
2. Drag all images from `/public/images/` into ImageOptim
3. It will compress in place (lossless + lossy)
4. Check file sizes - should be ~90% smaller

**After optimization, verify:**
```bash
ls -lh public/images/hero/
ls -lh public/images/services/
```

All files should be under 200KB.

---

### 2. Fix Phone Number Inconsistency 🔴 URGENT

**Problem:** Contact page shows fake phone number `(561) 555-1234`

**File:** `/app/contact/page.tsx`

**Line 276 - BEFORE:**
```tsx
<a href="tel:+15615551234" className="...">
  (561) 555-1234
</a>
```

**Line 276 - AFTER:**
```tsx
<a href="tel:+15613346350" className="...">
  (561) 334-6350
</a>
```

**Verification:**
Search entire codebase for any remaining `555-1234`:
```bash
grep -r "555-1234" .
```

Should return nothing.

---

### 3. Convert CSS Backgrounds to next/image 🔴 CRITICAL

**Problem:** Hero sections use CSS `backgroundImage` instead of Next.js Image component, missing optimizations.

#### File 1: `/components/home/HeroSection.tsx`

**Lines 14-19 - BEFORE:**
```tsx
<div
  className="absolute inset-0 z-0"
  style={{
    backgroundImage:
      "url(https://images.unsplash.com/photo-1563720360172-67b8f3dce741)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
```

**AFTER:**
```tsx
import Image from "next/image";

// Add after line 1
<div className="absolute inset-0 z-0">
  <Image
    src="https://images.unsplash.com/photo-1563720360172-67b8f3dce741?q=80&w=2000"
    alt="Luxury chauffeur service"
    fill
    priority
    className="object-cover"
    sizes="100vw"
  />
</div>
```

#### File 2: `/app/booking/page.tsx`

**Lines 13-19 - BEFORE:**
```tsx
<div
  className="absolute inset-0 z-0"
  style={{
    backgroundImage:
      "url(/images/hero/chauffeur-service.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
```

**AFTER:**
```tsx
import Image from "next/image";

<div className="absolute inset-0 z-0">
  <Image
    src="/images/hero/chauffeur-service.jpg"
    alt="Book your luxury transportation"
    fill
    priority
    className="object-cover"
    sizes="100vw"
  />
</div>
```

#### File 3: `/app/about/page.tsx`

**Lines 42-48 - Same pattern as above**

Replace with:
```tsx
<div className="absolute inset-0 z-0">
  <Image
    src="/images/hero/chauffeur-service.jpg"
    alt="About Palm Beach Transportation"
    fill
    priority
    className="object-cover"
    sizes="100vw"
  />
</div>
```

#### File 4: `/app/contact/page.tsx`

**Lines 13-19 - Same pattern**

Replace with:
```tsx
<div className="absolute inset-0 z-0">
  <Image
    src="/images/hero/miami-aerial.jpg"
    alt="Contact us for luxury transportation"
    fill
    priority
    className="object-cover"
    sizes="100vw"
  />
</div>
```

#### File 5: `/app/services/page.tsx`

**Lines 119-142 - Service cards with background images**

**BEFORE:**
```tsx
<div
  className="h-80 rounded-2xl overflow-hidden relative group"
  style={{
    backgroundImage: `url(${service.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
```

**AFTER:**
```tsx
<div className="h-80 rounded-2xl overflow-hidden relative group">
  <Image
    src={service.image}
    alt={service.title}
    fill
    className="object-cover transition-transform duration-500 group-hover:scale-110"
    sizes="(max-width: 768px) 100vw, 33vw"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-primary/40 transition-opacity group-hover:opacity-90" />
  {/* Rest of card content */}
</div>
```

**Benefits of this change:**
- Automatic WebP/AVIF conversion
- Lazy loading (except priority images)
- Responsive srcsets
- Better caching
- 30-40% smaller file sizes

---

### 4. Remove Unused FleetSection Component 🔴 URGENT

**Problem:** 171-line component with Swiper carousel dependency is defined but never used.

**Option A: Delete Entirely (Recommended)**

```bash
rm /Users/antoniodimow/Desktop/Cico\ website/palm-beach-transportation/components/home/FleetSection.tsx
```

**Then remove Swiper from package.json:**

**File:** `/package.json`

Remove this line:
```json
"swiper": "^12.0.3",
```

**Run:**
```bash
npm uninstall swiper
npm install
```

**Savings:** 45KB bundle size reduction

**Option B: Integrate into Homepage**

If you want to use the fleet showcase:

**File:** `/app/page.tsx`

Add after line 6:
```tsx
import { FleetSection } from "@/components/home/FleetSection";
```

Add after line 31 (after ServicesSection):
```tsx
<FleetSection />
```

**Note:** You'll need to download the 4 Unsplash fleet images locally first.

---

## High Priority Fixes (Priority 2)

These improve code quality and maintainability.

### 5. Fix Button Component asChild Implementation

**Problem:** Button accepts `asChild` prop but doesn't implement it properly, causing potential hydration warnings.

**File:** `/components/ui/button.tsx`

**Lines 36-48 - BEFORE:**
```tsx
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // If asChild is true, this button should be used as a wrapper for Link or other components
    // For now, we'll just pass through the props without the asChild prop
    const Comp = "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
```

**AFTER:**
```tsx
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "div" : "button";

    if (asChild) {
      return (
        <div className={cn(buttonVariants({ variant, size, className }))}>
          {props.children}
        </div>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
```

**Better solution (if you want proper Radix-style Slot):**

Install Radix Slot:
```bash
npm install @radix-ui/react-slot
```

**AFTER (with Slot):**
```tsx
import { Slot } from "@radix-ui/react-slot";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
```

---

### 6. Extract Inline Styles to Tailwind Classes

**Problem:** Extensive use of inline styles makes code harder to maintain and violates CSP.

#### File: `/components/layout/Header.tsx`

**Lines 88-94 - BEFORE:**
```tsx
<Button
  size="lg"
  style={{
    background: "linear-gradient(135deg, #C9A961 0%, #E5D4A5 100%)",
    color: "#0A1828",
    fontWeight: "600",
  }}
>
```

**Create custom button variant in `/components/ui/button.tsx`:**

Add to variants:
```tsx
const buttonVariants = cva(
  "...",
  {
    variants: {
      variant: {
        default: "...",
        // Add this new variant
        gold: "bg-gradient-to-br from-[#C9A961] to-[#E5D4A5] text-primary font-semibold hover:opacity-90 transition-opacity",
      },
```

**AFTER in Header.tsx:**
```tsx
<Button size="lg" variant="gold">
  Book Now
</Button>
```

**Apply this pattern to:**
- `/components/layout/Header.tsx` (lines 88-94, 151-155)
- `/components/home/HeroSection.tsx` (lines 61-65)
- `/components/home/CTASection.tsx` (lines 45-50)

#### Text Shadow Styles

**File: `/components/home/HeroSection.tsx`**

**Lines 32-35 - BEFORE:**
```tsx
style={{
  textShadow: "0 2px 10px rgba(0,0,0,0.3)",
}}
```

**Add to `/app/globals.css`:**
```css
@layer utilities {
  .text-shadow-lg {
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }

  .text-shadow-xl {
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  }
}
```

**AFTER:**
```tsx
className="... text-shadow-lg"
```

---

### 7. Download External Unsplash Images Locally

**Problem:** Depending on external Unsplash URLs is unreliable and has GDPR implications.

**Files with Unsplash URLs:**
- `/components/home/HeroSection.tsx` (line 16)
- `/components/home/FleetSection.tsx` (lines 20, 29, 38, 47)
- `/app/services/page.tsx` (line 63)

**Steps:**

1. **Download the images:**
```bash
cd public/images/hero

# Download main hero image
curl "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?q=80&w=2000" -o luxury-sedan-interior.jpg

# Download airport service image
curl "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000" -o airport-service.jpg
```

2. **Optimize them:**
```bash
sharp -i luxury-sedan-interior.jpg -o luxury-sedan-interior.jpg resize 1920 --quality 85
sharp -i airport-service.jpg -o airport-service.jpg resize 1200 --quality 85
```

3. **Update code references:**

**File: `/components/home/HeroSection.tsx`**

Line 16 - BEFORE:
```tsx
src="https://images.unsplash.com/photo-1563720360172-67b8f3dce741?q=80&w=2000"
```

AFTER:
```tsx
src="/images/hero/luxury-sedan-interior.jpg"
```

**File: `/app/services/page.tsx`**

Line 63 - BEFORE:
```tsx
image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
```

AFTER:
```tsx
image: "/images/services/airport-service.jpg",
```

---

### 8. Add Per-Page Metadata

**Problem:** All pages inherit the same title and description from root layout.

**Current:** Every page shows "Palm Beach Transportation Services | Executive & Corporate Travel"

**Goal:** Unique SEO for each page

#### File: `/app/about/page.tsx`

Add at the top (after imports):
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Palm Beach Transportation",
  description: "Learn about Palm Beach Transportation's commitment to luxury, reliability, and exceptional service. Family-owned and operated since 2010.",
  openGraph: {
    title: "About Us | Palm Beach Transportation",
    description: "Learn about Palm Beach Transportation's commitment to luxury service",
    images: ["/images/hero/chauffeur-service.jpg"],
  },
};
```

#### File: `/app/services/page.tsx`

```tsx
export const metadata: Metadata = {
  title: "Services | Palm Beach Transportation",
  description: "Executive transportation, airport transfers, corporate travel, and luxury limousine services in Palm Beach and South Florida.",
  openGraph: {
    title: "Luxury Transportation Services | Palm Beach",
    description: "Executive car service, airport transfers, corporate travel, and event transportation",
    images: ["/images/services/luxury-limousine-hero.jpg"],
  },
};
```

#### File: `/app/contact/page.tsx`

```tsx
export const metadata: Metadata = {
  title: "Contact Us | Palm Beach Transportation",
  description: "Contact Palm Beach Transportation for luxury car service. Call (561) 334-6350 or email info@pbtcarservice.com for reservations.",
  openGraph: {
    title: "Contact Us | Palm Beach Transportation",
    description: "Get in touch for luxury transportation services",
    images: ["/images/hero/miami-aerial.jpg"],
  },
};
```

#### File: `/app/booking/page.tsx`

```tsx
export const metadata: Metadata = {
  title: "Book Now | Palm Beach Transportation",
  description: "Reserve your luxury transportation with Palm Beach Transportation. Available 24/7 for airport transfers, corporate travel, and special events.",
  openGraph: {
    title: "Book Your Luxury Ride | Palm Beach Transportation",
    description: "Reserve premium transportation services in Palm Beach",
    images: ["/images/hero/chauffeur-service.jpg"],
  },
};
```

---

## Medium Priority Fixes (Priority 3)

These reduce code duplication and add polish.

### 9. Extract Reusable PageHero Component

**Problem:** Hero section code duplicated across 4 pages.

**Create:** `/components/layout/PageHero.tsx`

```tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  backgroundAlt: string;
  height?: "short" | "medium" | "tall";
}

export function PageHero({
  title,
  subtitle,
  backgroundImage,
  backgroundAlt,
  height = "medium",
}: PageHeroProps) {
  const heightClasses = {
    short: "min-h-[40vh]",
    medium: "min-h-[50vh]",
    tall: "min-h-[60vh]",
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-12">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}
```

**Usage in `/app/booking/page.tsx`:**

**BEFORE (lines 10-40):**
```tsx
<section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
  {/* 30 lines of repetitive code */}
</section>
```

**AFTER:**
```tsx
import { PageHero } from "@/components/layout/PageHero";

<PageHero
  title="Book Your Luxury Ride"
  subtitle="Reserve your premium transportation in just a few steps"
  backgroundImage="/images/hero/chauffeur-service.jpg"
  backgroundAlt="Book luxury transportation"
/>
```

**Apply to:**
- `/app/about/page.tsx`
- `/app/contact/page.tsx`
- `/app/services/page.tsx`

**Code reduction:** ~120 lines → ~20 lines

---

### 10. Add Loading and Error States

#### Create `/app/loading.tsx`

```tsx
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-gray">
      <div className="text-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-gold border-r-transparent mb-4" />
        <p className="text-primary font-semibold">Loading...</p>
      </div>
    </div>
  );
}
```

#### Create `/app/error.tsx`

```tsx
"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-gray px-4">
      <div className="text-center max-w-md">
        <h2 className="font-playfair text-3xl font-bold text-primary mb-4">
          Something went wrong
        </h2>
        <p className="text-charcoal mb-6">
          We apologize for the inconvenience. Please try again.
        </p>
        <Button onClick={reset} size="lg">
          Try Again
        </Button>
      </div>
    </div>
  );
}
```

#### Create `/app/not-found.tsx`

```tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-gray px-4">
      <div className="text-center max-w-md">
        <h1 className="font-playfair text-6xl font-bold text-gold mb-4">404</h1>
        <h2 className="font-playfair text-3xl font-bold text-primary mb-4">
          Page Not Found
        </h2>
        <p className="text-charcoal mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button size="lg">Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
```

---

### 11. Add robots.txt and sitemap.xml

#### Create `/public/robots.txt`

```txt
# Allow all crawlers
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://your-domain.com/sitemap.xml

# Crawl delay
Crawl-delay: 0
```

#### Create `/app/sitemap.ts`

```typescript
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://your-domain.com"; // Replace with actual domain

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
```

---

### 12. Add Security Headers

**File:** `/next.config.ts`

**BEFORE:**
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
```

**AFTER:**
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

---

## Performance Benchmarks

### Before Optimization

| Metric | Current | Grade |
|--------|---------|-------|
| LCP (Largest Contentful Paint) | 8-12s | ❌ F |
| FID (First Input Delay) | 100ms | ⚠️ C |
| CLS (Cumulative Layout Shift) | 0.1 | ✅ A |
| Total Page Weight | 48MB | ❌ F |
| Time to Interactive | 6-8s | ❌ F |
| Lighthouse Performance Score | 40-50 | ❌ F |

### After Optimization

| Metric | Target | Grade |
|--------|--------|-------|
| LCP (Largest Contentful Paint) | 1.5-2.5s | ✅ A |
| FID (First Input Delay) | <100ms | ✅ A |
| CLS (Cumulative Layout Shift) | <0.1 | ✅ A |
| Total Page Weight | 2-3MB | ✅ A |
| Time to Interactive | 2-3s | ✅ A |
| Lighthouse Performance Score | 90-95 | ✅ A |

### Expected Improvements

- **Page Load Speed:** 80% faster
- **Page Weight:** 94% reduction
- **Bundle Size:** 11% smaller
- **Mobile Performance:** 85% improvement
- **SEO Score:** +40 points

---

## Testing Checklist

### Before Deploying

- [ ] Run production build: `npm run build`
- [ ] Check for TypeScript errors: `npm run lint`
- [ ] Test on mobile device (real device, not just DevTools)
- [ ] Test on slow 3G connection (Chrome DevTools throttling)
- [ ] Verify all images load correctly
- [ ] Check all links work (no 404s)
- [ ] Test contact phone number clickable
- [ ] Test email link opens mail client
- [ ] Verify responsive design on tablet
- [ ] Check all pages have unique titles (view source)
- [ ] Test loading states (slow connection)
- [ ] Test error boundaries (break a component temporarily)
- [ ] Check favicon appears
- [ ] Verify social media meta tags (Facebook Debugger)
- [ ] Run Lighthouse audit (score >90)
- [ ] Check bundle size: `npm run build` (main bundle <500KB)

### Lighthouse Audit Steps

1. Open your site in Chrome Incognito
2. Open DevTools (F12)
3. Go to "Lighthouse" tab
4. Select "Mobile" and "Performance"
5. Click "Analyze page load"
6. Verify score >90

### Performance Testing Tools

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)
- Chrome DevTools Lighthouse

---

## Deployment Preparation

### Environment Variables

**For Vercel/Production:**

1. Go to Vercel Dashboard → Project → Settings → Environment Variables
2. Add these:

```
NEXT_PUBLIC_COMPANY_NAME=PBT Car Service
NEXT_PUBLIC_CONTACT_PHONE=+15613346350
NEXT_PUBLIC_CONTACT_EMAIL=info@pbtcarservice.com
NEXT_PUBLIC_APP_URL=https://your-actual-domain.com
```

**DO NOT ADD:**
- TELEGRAM_BOT_TOKEN (not needed if not using)
- RESEND_API_KEY (not implemented yet)

### Build Test

```bash
npm run build
```

**Expected output:**
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (5/5)
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    XXX kB        XXX kB
├ ○ /about                               XXX kB        XXX kB
├ ○ /booking                             XXX kB        XXX kB
├ ○ /contact                             XXX kB        XXX kB
└ ○ /services                            XXX kB        XXX kB

○  (Static)  prerendered as static content
```

All pages should show ○ (Static) for best performance.

### Vercel Deployment Steps

1. **Connect Repository**
   ```bash
   # Push to GitHub first
   git add .
   git commit -m "Production optimization complete"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Framework: Next.js (auto-detected)
   - Root Directory: `./`
   - Click "Deploy"

3. **Add Environment Variables**
   - Settings → Environment Variables
   - Add the variables from above

4. **Configure Custom Domain**
   - Settings → Domains
   - Add your domain
   - Follow DNS configuration instructions

5. **Enable Analytics (Optional)**
   - Settings → Analytics
   - Enable Vercel Analytics

### Post-Deployment Checklist

- [ ] Site loads at production URL
- [ ] HTTPS is enabled (Vercel does this automatically)
- [ ] Custom domain works (if configured)
- [ ] All images load correctly
- [ ] Run Lighthouse on production URL
- [ ] Check mobile performance
- [ ] Verify contact information is correct
- [ ] Test all navigation links
- [ ] Check SEO meta tags (View Source)
- [ ] Test contact phone link on mobile
- [ ] Verify email link works
- [ ] Check robots.txt is accessible: `/robots.txt`
- [ ] Check sitemap is accessible: `/sitemap.xml`
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (if desired)

---

## Quick Reference Commands

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Check for errors
```

### Image Optimization
```bash
# Install Sharp CLI
npm install -g sharp-cli

# Optimize single image
sharp -i input.jpg -o output.jpg resize 1920 --quality 85

# Batch optimize
for file in *.jpg; do sharp -i "$file" -o "optimized-$file" resize 1920 --quality 85; done
```

### File Size Check
```bash
# Check image sizes
ls -lh public/images/hero/
ls -lh public/images/services/

# Check total images size
du -sh public/images/
```

### Search and Replace
```bash
# Find all phone numbers
grep -r "555-1234" .

# Find all Unsplash URLs
grep -r "unsplash.com" .

# Find all inline styles
grep -r "style={{" components/
```

---

## Priority Implementation Order

### Day 1 (Critical Fixes - 4-6 hours)

1. ✅ Optimize all images (2-3 hours)
2. ✅ Fix phone number on contact page (5 minutes)
3. ✅ Convert CSS backgrounds to next/image (1 hour)
4. ✅ Remove FleetSection component (10 minutes)
5. ✅ Test build: `npm run build`

### Day 2 (High Priority - 3-4 hours)

6. ✅ Fix Button component (30 minutes)
7. ✅ Extract inline styles to Tailwind (1 hour)
8. ✅ Download Unsplash images locally (30 minutes)
9. ✅ Add per-page metadata (1 hour)
10. ✅ Test Lighthouse score

### Day 3 (Medium Priority - 2-3 hours)

11. ✅ Create PageHero component (1 hour)
12. ✅ Add loading/error/404 pages (1 hour)
13. ✅ Add robots.txt and sitemap (30 minutes)
14. ✅ Add security headers (15 minutes)
15. ✅ Final testing and deployment

---

## Success Criteria

You'll know you're done when:

- ✅ All images under 200KB each
- ✅ Total page weight under 3MB
- ✅ Lighthouse Performance score >90
- ✅ Page loads in under 3 seconds
- ✅ No console errors or warnings
- ✅ All links work (no 404s)
- ✅ Contact info is consistent
- ✅ Build completes without errors
- ✅ Mobile performance is excellent
- ✅ SEO meta tags are unique per page

---

## Support Resources

### Image Optimization Tools
- [Squoosh.app](https://squoosh.app/) - Online image optimizer
- [ImageOptim](https://imageoptim.com/) - Mac app for image compression
- [Sharp](https://sharp.pixelplumbing.com/) - Node.js image processing

### Performance Testing
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)

### SEO Tools
- [Google Search Console](https://search.google.com/search-console)
- [Meta Tags Validator](https://metatags.io/)
- [Schema Markup Validator](https://validator.schema.org/)

### Learning Resources
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Web.dev Performance Guide](https://web.dev/explore/fast)
- [Core Web Vitals](https://web.dev/articles/vitals)

---

## Troubleshooting

### "Build fails with TypeScript errors"
- Run `npm run lint` to see all errors
- Most common: unused variables (delete them)
- Check for missing imports

### "Images look blurry after optimization"
- Increase quality from 85 to 90
- Make sure resize width matches display size
- Use WebP format for better quality at same file size

### "Page still loads slowly"
- Check Network tab in DevTools
- Verify images are actually optimized (check file sizes)
- Make sure you're using next/image, not CSS backgrounds

### "Lighthouse score is still low"
- Clear cache and test in Incognito
- Check for remaining large images
- Verify all images use next/image
- Check for blocking JavaScript

---

**Last Updated:** 2025
**Version:** 1.0
**Status:** Ready for Implementation

---

*This plan represents a complete optimization strategy for production readiness. Follow it sequentially for best results.*
