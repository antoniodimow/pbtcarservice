"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-warm-gray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Ready to Experience
            <span className="block text-gold mt-2">
              Luxury Transportation?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-primary mb-8 sm:mb-12 max-w-2xl mx-auto">
            Book your next executive journey with Palm Beach Transportation
            Services. Available 24/7 for your convenience.
          </p>

          <div className="flex justify-center items-center">
            <Button
              asChild
              className="px-8 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #C9A961 0%, #E5D4A5 100%)',
                border: '2px solid #FFFFFF',
                color: '#0A1828',
                height: 'auto',
              }}
            >
              <Link href="/booking" className="flex items-center justify-center gap-3" style={{ color: '#0A1828' }}>
                <Calendar className="h-6 w-6" />
                <span>BOOK YOUR RIDE</span>
              </Link>
            </Button>
          </div>

          {/* Features */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
            <div className="flex gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1 sm:mb-2 text-base sm:text-lg">
                  Easy Booking
                </h3>
                <p className="text-sm sm:text-base text-primary font-medium">
                  Book online in minutes or call our 24/7 concierge
                </p>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1 sm:mb-2 text-base sm:text-lg">
                  24/7 Support
                </h3>
                <p className="text-sm sm:text-base text-primary font-medium">
                  Round-the-clock customer service for any inquiries
                </p>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1 sm:mb-2 text-base sm:text-lg">
                  Guaranteed Service
                </h3>
                <p className="text-sm sm:text-base text-primary font-medium">
                  On-time arrivals and professional chauffeurs, always
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
