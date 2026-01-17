"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Phone, Mail, CheckCircle, Clock, CreditCard } from "lucide-react";
import { useState } from "react";

export default function BookingPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/chauffeur-service.jpg"
            alt="Book your luxury transportation"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-24 pb-12">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Book Your Luxury Ride
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Reserve your premium transportation in just a few steps
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center text-white">
              <Lock className="h-5 w-5 text-gold mr-2" />
              <span className="text-sm">Secure Booking</span>
            </div>
            <div className="flex items-center text-white">
              <Shield className="h-5 w-5 text-gold mr-2" />
              <span className="text-sm">256-bit Encryption</span>
            </div>
            <div className="flex items-center text-white">
              <CreditCard className="h-5 w-5 text-gold mr-2" />
              <span className="text-sm">Safe Payments</span>
            </div>
            <div className="flex items-center text-white">
              <Clock className="h-5 w-5 text-gold mr-2" />
              <span className="text-sm">Instant Confirmation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Portal Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Introduction Card */}
            <motion.div
              className="bg-warm-gray rounded-xl p-6 md:p-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-2">
                  Secure Booking Portal
                </h2>
                <p className="text-charcoal text-sm">
                  Complete your reservation securely through our trusted booking partner.
                  Select your vehicle, choose your date and time, and pay safely online.
                </p>
              </div>
            </motion.div>

            {/* Iframe Container */}
            <motion.div
              className="relative bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Header Bar */}
              <div className="bg-gradient-to-r from-primary to-primary-dark px-6 py-4 flex items-center justify-between">
                <div className="flex items-center">
                  <Lock className="h-4 w-4 text-gold mr-2" />
                  <span className="text-white text-sm font-medium">
                    Secure Connection
                  </span>
                </div>
                <div className="flex items-center text-gray-300 text-xs">
                  <span className="hidden sm:inline mr-2">Palm Beach Transportation</span>
                  <CheckCircle className="h-4 w-4 text-green-400" />
                </div>
              </div>

              {/* Loading State */}
              {!iframeLoaded && (
                <div className="absolute inset-0 top-[52px] bg-warm-gray flex items-center justify-center z-10">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-charcoal">Loading booking portal...</p>
                  </div>
                </div>
              )}

              {/* Moovs Iframe */}
              <iframe
                src="https://customer.moovs.app/palm-beach-service-group-inc/iframe"
                title="Palm Beach Transportation - Secure Booking"
                className="w-full border-0 h-[600px] sm:h-[700px] md:h-[800px]"
                onLoad={() => setIframeLoaded(true)}
                allow="payment; geolocation"
              />

              {/* Footer Bar */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center text-xs text-gray-500">
                    <Shield className="h-3 w-3 mr-1" />
                    <span>Your payment information is encrypted and secure</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-4 py-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-charcoal">Powered by Moovs</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Trust Features */}
            <motion.div
              className="grid md:grid-cols-3 gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-warm-gray rounded-lg p-5 text-center">
                <CheckCircle className="h-8 w-8 text-gold mx-auto mb-3" />
                <h3 className="font-semibold text-primary mb-1">Instant Confirmation</h3>
                <p className="text-sm text-charcoal">Receive immediate booking confirmation via email</p>
              </div>
              <div className="bg-warm-gray rounded-lg p-5 text-center">
                <CreditCard className="h-8 w-8 text-gold mx-auto mb-3" />
                <h3 className="font-semibold text-primary mb-1">Secure Payments</h3>
                <p className="text-sm text-charcoal">All major credit cards accepted with fraud protection</p>
              </div>
              <div className="bg-warm-gray rounded-lg p-5 text-center">
                <Clock className="h-8 w-8 text-gold mx-auto mb-3" />
                <h3 className="font-semibold text-primary mb-1">24/7 Support</h3>
                <p className="text-sm text-charcoal">Our team is always available to assist you</p>
              </div>
            </motion.div>

              {/* Alternative Contact Methods */}
              <div className="mt-12 pt-8 border-t border-gray-300">
                <p className="text-center text-charcoal mb-6">
                  Prefer to contact us directly?
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button asChild variant="outline" className="w-full">
                    <a href="tel:+15613346350" className="flex items-center justify-center">
                      <Phone className="h-4 w-4 mr-2" />
                      Call: (561) 334-6350
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="mailto:pbtcarservice@gmail.com" className="flex items-center justify-center">
                      <Mail className="h-4 w-4 mr-2" />
                      Email: pbtcarservice@gmail.com
                    </a>
                  </Button>
                </div>
              </div>
          </div>
        </div>
      </section>
    </main>
  );
}
