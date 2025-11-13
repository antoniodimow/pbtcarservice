import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Corporate Travel", href: "/services/corporate" },
    { name: "Executive Transport", href: "/services/executive" },
    { name: "Event Logistics", href: "/services/events" },
    { name: "Airport Transfers", href: "/services/airport" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Fleet", href: "/fleet" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cancellation Policy", href: "/cancellation" },
    { name: "FAQ", href: "/faq" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-warm-gray text-primary">
      <div className="container mx-auto px-4 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold text-gold">
              Palm Beach
            </h3>
            <p className="text-sm text-primary">
              Luxury executive transportation services for discerning clients in
              Palm Beach and beyond.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+15613346350"
                className="flex items-center gap-2 text-sm text-primary hover:text-gold transition-colors"
              >
                <Phone className="h-4 w-4" />
                (561) 334-6350
              </a>
              <a
                href="mailto:info@pbtcarservice.com"
                className="flex items-center gap-2 text-sm text-primary hover:text-gold transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@pbtcarservice.com
              </a>
              <div className="flex items-start gap-2 text-sm text-primary">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Palm Beach, FL</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-semibold text-gold mb-4">Legal</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <h4 className="font-semibold text-gold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-gold transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-gold transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-gold transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gold/20 text-center space-y-2">
          <p className="text-xs sm:text-sm text-charcoal">
            &copy; {new Date().getFullYear()} Palm Beach Transportation
            Services. All rights reserved.
          </p>
          <p className="text-xs text-charcoal">
            Created by Antonio Dimov
          </p>
        </div>
      </div>
    </footer>
  );
}
