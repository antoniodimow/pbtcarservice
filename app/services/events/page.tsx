"use client";

import { ServicePageHero } from "@/components/services/ServicePageHero";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { CTASection } from "@/components/home/CTASection";
import { Calendar, Users, MapPin, Clock, Headphones, ListChecks } from "lucide-react";

const features = [
  {
    icon: ListChecks,
    title: "Complete Coordination",
    description:
      "Full event logistics management from planning to execution.",
  },
  {
    icon: Users,
    title: "Group Transportation",
    description:
      "Multiple vehicles coordinated to transport large groups seamlessly.",
  },
  {
    icon: MapPin,
    title: "Route Planning",
    description:
      "Optimized routes to ensure timely arrivals for all attendees.",
  },
  {
    icon: Clock,
    title: "Precise Timing",
    description:
      "Synchronized scheduling to keep your event running smoothly.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Event coordinator to manage all transportation details.",
  },
  {
    icon: Calendar,
    title: "Flexible Planning",
    description:
      "Adaptable service for events of any size and duration.",
  },
];

export default function EventLogisticsPage() {
  return (
    <>
      <ServicePageHero
        title="Event & Conference Logistics"
        description="Comprehensive transportation coordination for conferences, weddings, corporate events, and special occasions of any size."
        Icon={Calendar}
        backgroundImage="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
      />
      <ServiceFeatures features={features} />

      <section className="py-20 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Flawless Event Transportation
            </h2>
            <div className="space-y-6 text-charcoal">
              <p className="text-lg">
                Whether you're organizing a corporate conference, a luxury wedding, or a high-profile gala, our event logistics service ensures your guests arrive comfortably and on time. We specialize in coordinating multi-vehicle transportation for groups of any size.
              </p>
              <p className="text-lg">
                Our experienced team works closely with event planners to create customized transportation solutions that align with your event schedule and requirements. From initial planning to day-of execution, we handle every detail so you can focus on your event.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white rounded-xl p-8 shadow-md">
                  <h3 className="font-semibold text-xl text-primary mb-4">
                    Corporate Events:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                      <span>Conferences and conventions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                      <span>Corporate retreats and team building</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                      <span>Product launches and galas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                      <span>Shareholder meetings</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-md">
                  <h3 className="font-semibold text-xl text-primary mb-4">
                    Social Events:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                      <span>Weddings and receptions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                      <span>Charity fundraisers and galas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                      <span>Private parties and celebrations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                      <span>Sporting and entertainment events</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
