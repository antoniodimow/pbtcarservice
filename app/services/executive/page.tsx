import { ServicePageHero } from "@/components/services/ServicePageHero";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { CTASection } from "@/components/home/CTASection";
import { Users, Lock, Star, Smartphone, Shield, Crown } from "lucide-react";

const features = [
  {
    icon: Crown,
    title: "Premium Vehicles",
    description:
      "Luxury sedans and SUVs maintained to the highest standards for your comfort.",
  },
  {
    icon: Shield,
    title: "Complete Discretion",
    description:
      "Confidentiality and privacy are our top priorities for all VIP clients.",
  },
  {
    icon: Star,
    title: "Professional Chauffeurs",
    description:
      "Highly trained, vetted drivers who provide exceptional service.",
  },
  {
    icon: Smartphone,
    title: "Real-Time Updates",
    description:
      "Track your ride and communicate with your chauffeur seamlessly.",
  },
  {
    icon: Lock,
    title: "Secure Service",
    description:
      "Background-checked drivers and secure payment processing for peace of mind.",
  },
  {
    icon: Users,
    title: "Personalized Experience",
    description:
      "Customized service tailored to your preferences and requirements.",
  },
];

export default function ExecutiveTransportPage() {
  return (
    <>
      <ServicePageHero
        title="Executive Transport Services"
        description="Discreet, professional chauffeur service designed for high-level executives and VIP clients who demand excellence in every detail."
        Icon={Users}
        backgroundImage="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2073&auto=format&fit=crop"
      />
      <ServiceFeatures features={features} />

      <section className="py-20 bg-warm-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              The Executive Experience
            </h2>
            <div className="space-y-6 text-charcoal">
              <p className="text-lg">
                Our executive transportation service is crafted for discerning individuals who expect nothing but the best. Every aspect of your journey is carefully orchestrated to provide a seamless, luxurious experience from start to finish.
              </p>
              <p className="text-lg">
                With a focus on discretion, reliability, and comfort, our service caters to C-suite executives, dignitaries, celebrities, and high-net-worth individuals who require transportation that matches their status and expectations.
              </p>
              <div className="bg-white rounded-xl p-8 shadow-md mt-8">
                <h3 className="font-semibold text-xl text-primary mb-4">
                  Executive Benefits:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                    <span>Priority scheduling and last-minute availability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                    <span>Background-checked and extensively trained chauffeurs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                    <span>Luxury amenities including WiFi and refreshments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                    <span>Flexible payment options and monthly billing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
                    <span>Personalized service based on your preferences</span>
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
