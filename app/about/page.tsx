"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Award, Heart, Clock, Star } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

const values = [
  {
    icon: Shield,
    title: "Reliability",
    description:
      "On-time service you can count on, every single time. Your schedule is our priority.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Premium vehicles, professional chauffeurs, and attention to every detail.",
  },
  {
    icon: Heart,
    title: "Discretion",
    description:
      "Complete confidentiality and privacy for all our executive clients.",
  },
  {
    icon: Star,
    title: "Service",
    description:
      "Personalized attention and 24/7 support to meet your unique needs.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/chauffeur-service.jpg"
            alt="About Palm Beach Transportation - Luxury car service"
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
              About Palm Beach Transportation
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Setting the standard for luxury transportation since 2009
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-warm-gray">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-semibold text-xl text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-charcoal">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="pt-12 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-charcoal">
                <p>
                  Founded in 2009, Palm Beach Transportation Services emerged from a simple yet powerful vision: to provide executive transportation that matches the sophistication and standards of distinguished clientele.
                </p>
                <p>
                  Palm Beach Transportation is built on the principles of personalized attention, reliability, and commitment to excellence. Every ride is handled with the utmost care and professionalism.
                </p>
                <p>
                  When you choose Palm Beach Transportation, you're not just booking a ride—you're entrusting your time, your safety, and your reputation to a service dedicated to exceeding your expectations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Clock className="h-10 w-10 text-gold mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                24/7
              </div>
              <div className="text-sm text-charcoal">Available</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Star className="h-10 w-10 text-gold mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                5/5
              </div>
              <div className="text-sm text-charcoal">Excellence Standard</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Award className="h-10 w-10 text-gold mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                100%
              </div>
              <div className="text-sm text-charcoal">On-Time Commitment</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Commitment
              </h2>
              <div className="space-y-4 text-lg text-charcoal">
                <p>
                  At Palm Beach Transportation Services, your time is invaluable. That's why the service is built around one simple promise: to provide transportation that's as reliable as it is luxurious.
                </p>
                <p>
                  Professional service backed by rigorous standards and attention to detail. Every vehicle is maintained to the highest standards. Every booking receives full attention and care. Excellence isn't just about having nice cars—it's about creating an experience that exceeds your expectations every single time.
                </p>
                <p>
                  Whether you're heading to an important meeting, catching a flight, or hosting VIP guests, you can trust Palm Beach Transportation to deliver professionalism, punctuality, and peace of mind.
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
