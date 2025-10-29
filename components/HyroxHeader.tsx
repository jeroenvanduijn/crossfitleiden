"use client";

import Link from "next/link";
import { useState } from "react";

export default function HyroxHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link href="/hyrox" className="flex items-center space-x-3">
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-cinnabar leading-tight">
                HYROX SIMULATION
              </span>
              <span className="text-xs text-gray-600 font-medium">
                CrossFit Leiden
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#over"
              className="text-gray-700 hover:text-cinnabar transition-colors font-medium"
            >
              Over HYROX
            </a>
            <a
              href="#waarom"
              className="text-gray-700 hover:text-cinnabar transition-colors font-medium"
            >
              Waarom Meedoen
            </a>
            <Link
              href="/hyrox/heats"
              className="text-gray-700 hover:text-cinnabar transition-colors font-medium"
            >
              Heats & Uitslagen
            </Link>

            {/* CTA Button */}
            <a href="#inschrijven" className="cta-button">
              Schrijf je in
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
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
              <a
                href="#over"
                className="text-gray-700 hover:text-cinnabar transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Over HYROX
              </a>
              <a
                href="#waarom"
                className="text-gray-700 hover:text-cinnabar transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Waarom Meedoen
              </a>
              <Link
                href="/hyrox/heats"
                className="text-gray-700 hover:text-cinnabar transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Heats & Uitslagen
              </Link>
              <a
                href="#inschrijven"
                className="cta-button text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Schrijf je in
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
