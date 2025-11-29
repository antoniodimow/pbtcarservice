"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Henderson",
    title: "CEO, TechVentures Inc.",
    content:
      "Palm Beach Transportation has been our go-to service for executive travel for over three years. Their professionalism and attention to detail are unmatched.",
    rating: 5,
  },
  {
    name: "Sarah Martinez",
    title: "Event Coordinator",
    content:
      "Coordinating transportation for our annual conference was seamless thanks to their team. Every vehicle arrived on time, and our VIP guests were thoroughly impressed.",
    rating: 5,
  },
  {
    name: "David Chen",
    title: "Partner, Chen & Associates",
    content:
      "The discretion and reliability they provide is exactly what high-level executives need. I wouldn't trust anyone else with my transportation needs.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-warm-gray">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Trusted by executives and businesses across Palm Beach
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gold/20" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="#FBBF24"
                  />
                ))}
              </div>
              <p className="text-charcoal mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-charcoal/70">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
              5,000+
            </div>
            <div className="text-sm text-charcoal">Trips Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
              500+
            </div>
            <div className="text-sm text-charcoal">Corporate Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
              4.9/5
            </div>
            <div className="text-sm text-charcoal">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
              100%
            </div>
            <div className="text-sm text-charcoal">On-Time Arrivals</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
