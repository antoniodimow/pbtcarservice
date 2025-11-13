"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, Users, Calendar, Plane, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description:
      "Seamless business transportation with flexible scheduling and corporate account options.",
    href: "/services/corporate",
    features: ["Flexible Billing", "Priority Scheduling", "Account Management"],
  },
  {
    icon: Users,
    title: "Executive Transport",
    description:
      "Discreet, professional chauffeur service for high-level executives and VIP clients.",
    href: "/services/executive",
    features: ["Premium Vehicles", "Professional Chauffeurs", "Complete Discretion"],
  },
  {
    icon: Calendar,
    title: "Event Logistics",
    description:
      "Coordinated transportation for conferences, weddings, and corporate events.",
    href: "/services/events",
    features: ["Group Coordination", "Event Planning", "Multiple Vehicles"],
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Reliable airport transportation with flight tracking and meet & greet service.",
    href: "/services/airport",
    features: ["Flight Tracking", "Meet & Greet", "Luggage Assistance"],
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-warm-gray">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-charcoal max-w-2xl mx-auto px-4">
            Tailored transportation solutions for every executive need
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block h-full bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                    <service.icon className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-charcoal mb-6 flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-charcoal"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gold mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-gold font-medium group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
