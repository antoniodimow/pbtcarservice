"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Phone } from "lucide-react";

export default function BookingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(/images/hero/chauffeur-service.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
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

      {/* Booking Form Placeholder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-warm-gray rounded-xl p-8 md:p-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Calendar className="h-16 w-16 text-gold mx-auto mb-6" />
              <h2 className="font-playfair text-3xl font-bold text-primary mb-4">
                Online Booking System Coming Soon
              </h2>
              <p className="text-lg text-charcoal mb-8">
                We're currently building our advanced booking platform. In the meantime, please use one of the options below to reserve your ride.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <Phone className="h-10 w-10 text-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-xl text-primary mb-2">
                    Call Us
                  </h3>
                  <p className="text-charcoal mb-4">
                    Speak directly with our 24/7 concierge team
                  </p>
                  <Button asChild className="w-full">
                    <a href="tel:+15613346350">(561) 334-6350</a>
                  </Button>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <MapPin className="h-10 w-10 text-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-xl text-primary mb-2">
                    Email Us
                  </h3>
                  <p className="text-charcoal mb-4">
                    Send us your trip details and preferences
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href="mailto:info@pbtcarservice.com">
                      Send Email
                    </a>
                  </Button>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <Users className="h-10 w-10 text-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-xl text-primary mb-2">
                    Contact Form
                  </h3>
                  <p className="text-charcoal mb-4">
                    Fill out our detailed inquiry form
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href="/contact">Contact Us</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}
