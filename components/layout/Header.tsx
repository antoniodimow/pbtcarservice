"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || mobileMenuOpen ? "bg-white shadow-xl lg:bg-white" : "bg-transparent lg:bg-primary lg:shadow-xl"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between p-4 sm:p-5 lg:px-8 relative">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "flex items-center transition-opacity duration-300",
            scrolled || mobileMenuOpen ? "opacity-100" : "opacity-0 lg:opacity-100"
          )}
        >
          <Image
            src="/images/logos/logo.png"
            alt="Palm Beach Transportation Services"
            width={32}
            height={32}
            className={cn(
              "object-contain transition-all duration-300",
              scrolled || mobileMenuOpen ? "brightness-0" : ""
            )}
            priority
          />
        </Link>

        {/* Desktop Navigation - Absolutely Centered */}
        <div className="hidden lg:flex lg:gap-x-10 items-center absolute left-1/2 transform -translate-x-1/2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-lg font-bold hover:text-gold transition-colors tracking-wide font-inter",
                scrolled ? "text-primary" : "text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex lg:gap-x-4 items-center">
          <a
            href="tel:+15613346350"
            className={cn(
              "flex items-center gap-2 hover:text-gold transition-colors font-bold font-inter",
              scrolled ? "text-primary" : "text-white"
            )}
          >
            <Phone className="h-5 w-5" />
            <span className="text-lg">(561) 334-6350</span>
          </a>
          <Button
            asChild
            className="px-4 text-sm font-bold shadow-lg font-inter"
            style={{
              background: 'linear-gradient(135deg, #C9A961 0%, #E5D4A5 100%)',
              border: '2px solid #FFFFFF',
              color: '#0A1828',
              height: 'auto',
              padding: '0.4rem 1rem'
            }}
          >
            <Link href="/booking" className="flex items-center justify-center font-bold" style={{ color: '#0A1828' }}>
              BOOK NOW
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className={cn(
            "lg:hidden absolute right-4 transition-colors",
            scrolled || mobileMenuOpen ? "text-primary" : "text-white"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gold/20"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-lg font-bold text-primary hover:text-gold transition-colors py-3 font-inter"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gold/20 space-y-4">
                <a
                  href="tel:+15613346350"
                  className="flex items-center gap-2 text-primary hover:text-gold transition-colors py-2 text-lg font-bold font-inter"
                >
                  <Phone className="h-5 w-5" />
                  <span>(561) 334-6350</span>
                </a>
                <Button
                  className="w-full h-16 text-xl font-bold shadow-2xl font-inter"
                  asChild
                  style={{
                    background: 'linear-gradient(135deg, #C9A961 0%, #E5D4A5 100%)',
                    border: '2px solid #FFFFFF',
                    color: '#0A1828'
                  }}
                >
                  <Link
                    href="/booking"
                    className="flex items-center justify-center font-bold"
                    style={{ color: '#0A1828' }}
                  >
                    BOOK NOW
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
