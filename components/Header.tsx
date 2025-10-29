"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Over ons", href: "/over-ons" },
    { name: "Aanbod", href: "/aanbod" },
    { name: "Rooster", href: "/rooster" },
    { name: "HYROX", href: "/hyrox" },
    { name: "Tarieven", href: "/tarieven" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-heading font-bold text-cinnabar">
              CrossFit Leiden
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-cinnabar transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center space-x-2 text-sm">
              <button className="text-gray-700 hover:text-cinnabar font-medium">NL</button>
              <span className="text-gray-300">|</span>
              <button className="text-gray-400 hover:text-cinnabar">EN</button>
            </div>

            {/* CTA Button */}
            <Link href="/starten" className="cta-button">
              Gratis Proefles
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-cinnabar transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/starten"
                className="cta-button text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gratis Proefles
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
