"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ServicePageHeroProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  backgroundImage: string;
}

export function ServicePageHero({
  title,
  description,
  Icon,
  backgroundImage,
}: ServicePageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24 pb-12">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center">
              <Icon className="h-10 w-10 text-gold" />
            </div>
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            {description}
          </p>
          <Button size="lg" asChild>
            <Link href="/booking">Book This Service</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
