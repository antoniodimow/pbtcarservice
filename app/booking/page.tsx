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
              "url(https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
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
                    <a href="tel:+15615551234">(561) 555-1234</a>
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
                    <a href="mailto:info@palmbeachtransport.com">
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

      {/* Quick Booking Info */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8">
              What to Include in Your Booking
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-semibold text-xl text-gold mb-4">
                  Trip Details:
                </h3>
                <ul className="space-y-2 text-gray-200">
                  <li>• Pickup location and address</li>
                  <li>• Destination address</li>
                  <li>• Date and time</li>
                  <li>• Number of passengers</li>
                  <li>• Luggage requirements</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="font-semibold text-xl text-gold mb-4">
                  Contact Information:
                </h3>
                <ul className="space-y-2 text-gray-200">
                  <li>• Your name</li>
                  <li>• Phone number</li>
                  <li>• Email address</li>
                  <li>• Preferred vehicle type</li>
                  <li>• Any special requests</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
