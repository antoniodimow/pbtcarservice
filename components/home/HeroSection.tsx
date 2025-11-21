"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Luxury Car */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1563720360172-67b8f3dce741?q=80&w=2000"
          alt="Luxury chauffeur service with premium vehicles"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-0 bg-black/60"></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-16 sm:pt-20 pb-8 sm:pb-0">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.9)' }}>
              Where Elegance
              <span className="block mt-2 sm:mt-4" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.9)' }}>Meets</span>
              <span className="block text-gold mt-2 sm:mt-4" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.9)' }}>Excellence</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg md:text-2xl lg:text-3xl text-white mb-8 sm:mb-12 max-w-3xl mx-auto font-medium px-4"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.95)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Experience unparalleled luxury and professionalism with Palm Beach's
            premier chauffeur service. Tailored for executives who demand
            excellence.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto sm:min-w-[260px] h-16 sm:h-18 text-lg sm:text-xl group shadow-2xl font-bold border-3"
              style={{
                background: 'linear-gradient(135deg, #C9A961 0%, #E5D4A5 50%, #C9A961 100%)',
                borderColor: '#E5D4A5',
                color: '#0A1828'
              }}
            >
              <Link href="/booking" className="flex items-center justify-center" style={{ color: '#0A1828' }}>
                <Calendar className="mr-2 h-6 w-6 sm:h-7 sm:w-7" />
                BOOK NOW
                <ArrowRight className="ml-2 h-6 w-6 sm:h-7 sm:w-7 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 bg-white/10 backdrop-blur-md py-6 sm:py-8 md:py-10 px-4 sm:px-6 rounded-2xl border border-white/20 mx-4 sm:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3" style={{
                color: '#E5D4A5',
                textShadow: '0 2px 15px rgba(0,0,0,0.5)'
              }}>
                15+
              </div>
              <div className="text-xs sm:text-sm md:text-base font-medium tracking-wide uppercase" style={{
                color: '#FFFFFF',
                textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                letterSpacing: '0.05em'
              }}>Years of Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3" style={{
                color: '#E5D4A5',
                textShadow: '0 2px 15px rgba(0,0,0,0.5)'
              }}>
                98%
              </div>
              <div className="text-xs sm:text-sm md:text-base font-medium tracking-wide uppercase" style={{
                color: '#FFFFFF',
                textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                letterSpacing: '0.05em'
              }}>Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3" style={{
                color: '#E5D4A5',
                textShadow: '0 2px 15px rgba(0,0,0,0.5)'
              }}>
                24/7
              </div>
              <div className="text-xs sm:text-sm md:text-base font-medium tracking-wide uppercase" style={{
                color: '#FFFFFF',
                textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                letterSpacing: '0.05em'
              }}>Available</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
