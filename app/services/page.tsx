"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, Users, Calendar, Plane, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

const services = [
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description:
      "Seamless business transportation with flexible scheduling, corporate account options, and dedicated account management for your team.",
    href: "/services/corporate",
    features: [
      "Flexible corporate billing",
      "Priority scheduling",
      "Dedicated account manager",
      "24/7 availability",
    ],
    image: "/images/services/corporate-travel.jpg",
  },
  {
    icon: Users,
    title: "Executive Transport",
    description:
      "Discreet, professional chauffeur service designed specifically for high-level executives and VIP clients who demand excellence.",
    href: "/services/executive",
    features: [
      "Premium luxury vehicles",
      "Professional chauffeurs",
      "Complete discretion",
      "Personalized service",
    ],
    image: "/images/services/executive-transport.jpg",
  },
  {
    icon: Calendar,
    title: "Event Logistics",
    description:
      "Comprehensive coordination for conferences, weddings, corporate events, and special occasions of any size.",
    href: "/services/events",
    features: [
      "Group coordination",
      "Event planning support",
      "Multiple vehicles",
      "Precise timing",
    ],
    image: "/images/services/event-logistics.jpg",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Reliable airport transportation with real-time flight tracking, meet & greet service, and guaranteed on-time arrivals.",
    href: "/services/airport",
    features: [
      "Flight tracking",
      "Meet & greet service",
      "Luggage assistance",
      "All major airports",
    ],
    image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(/images/services/luxury-limousine-hero.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center 60%",
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
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-white">
              Tailored luxury transportation solutions for every executive need
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pt-12 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div
                    className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-xl"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-gold" />
                  </div>
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary">
                    {service.title}
                  </h2>
                  <p className="text-lg text-charcoal">{service.description}</p>

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                        <span className="text-charcoal">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all group"
                  >
                    Learn More About {service.title}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose Palm Beach Transportation?
              </h2>
              <div className="space-y-4 text-lg text-charcoal">
                <p>
                  For over 15 years, we've been the trusted choice for executives, businesses, and VIP clients throughout Palm Beach and South Florida. Our commitment to excellence, attention to detail, and unwavering professionalism set us apart.
                </p>
                <p>
                  Whether you need daily corporate transportation, a special event coordinator, or reliable airport service, our team is dedicated to exceeding your expectations every time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
