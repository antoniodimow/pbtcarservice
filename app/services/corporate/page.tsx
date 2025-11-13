"use client";

import { ServicePageHero } from "@/components/services/ServicePageHero";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { CTASection } from "@/components/home/CTASection";
import {
  Briefcase,
  Clock,
  CreditCard,
  Shield,
  Calendar,
  UserCheck,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description:
      "Book rides on-demand or schedule recurring trips for your team with ease.",
  },
  {
    icon: CreditCard,
    title: "Corporate Billing",
    description:
      "Simplified invoicing and expense management for your business needs.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Account Manager",
    description:
      "Personal support to handle all your corporate transportation requirements.",
  },
  {
    icon: Shield,
    title: "Guaranteed Reliability",
    description:
      "On-time service you can count on for important business meetings.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Round-the-clock service for early morning meetings or late-night arrivals.",
  },
  {
    icon: Briefcase,
    title: "Professional Chauffeurs",
    description:
      "Experienced drivers who understand the importance of discretion and professionalism.",
  },
];

export default function CorporateTravelPage() {
  return (
    <>
      <ServicePageHero
        title="Corporate Travel Solutions"
        description="Streamlined transportation services designed specifically for businesses. From executive meetings to client pickups, we ensure your team arrives on time, every time."
        Icon={Briefcase}
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
      />
      <ServiceFeatures features={features} />

      {/* Benefits Section */}
      <section className="py-20 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              Why Choose Our Corporate Service?
            </h2>
            <div className="space-y-6 text-charcoal">
              <p className="text-lg">
                Our corporate transportation service is tailored to meet the unique demands of modern businesses. We understand that time is your most valuable asset, which is why we guarantee punctual arrivals and departures for all your corporate travel needs.
              </p>
              <p className="text-lg">
                With dedicated account management, simplified billing, and a fleet of premium vehicles, we take the stress out of business transportation. Whether you need daily commutes for executives, airport transfers for visiting clients, or transportation for company events, we've got you covered.
              </p>
              <div className="bg-white rounded-xl p-8 shadow-md mt-8">
                <h3 className="font-semibold text-xl text-primary mb-4">
                  Perfect For:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                    <span>Daily executive commutes and business meetings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                    <span>Client pickups and VIP guest transportation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                    <span>Corporate events and team building activities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                    <span>Airport transfers for business travelers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                    <span>Multi-city business trips and roadshows</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
