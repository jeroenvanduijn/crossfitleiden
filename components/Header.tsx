"use client";

import Link from "next/link";
import { useState } from "react";
import CTAButton from "./CTAButton";
import HighLevelPopup from "./HighLevelPopup";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Over ons",
      href: "#",
      dropdown: [
        { name: "Over CrossFit Leiden", href: "/over-ons" },
        { name: "Het Team", href: "/over-ons/team" },
        { name: "Onze Locatie", href: "/over-ons/locatie" },
        { name: "Tarieven", href: "/tarieven" },
      ],
    },
    {
      name: "Aanbod",
      href: "#",
      dropdown: [
        { name: "Small Group Training", href: "/aanbod/small-group" },
        { name: "Kickstart Programma", href: "/kickstart" },
        { name: "Personal Training", href: "/aanbod/private-coaching" },
        { name: "HYROX", href: "/aanbod/hyrox" },
        { name: "Fysiofabriek", href: "/aanbod/fysiofabriek" },
        { name: "Sport & Performance", href: "/aanbod/sport-performance" },
      ],
    },
    { name: "Rooster", href: "/rooster" },
    {
      name: "Events",
      href: "#",
      dropdown: [
        { name: "HYROX Simulation", href: "/events/hyrox-simulation" },
        { name: "De Volgende Ronde", href: "/events/de-volgende-ronde" },
      ],
    },
    { name: "Ervaringen", href: "/ervaringen" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-heading font-bold text-[#E4572E]">
              CrossFit Leiden
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <>
                    <button className="text-gray-700 hover:text-[#E4572E] transition-colors font-medium flex items-center gap-1">
                      {item.name}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 pt-2 w-64 z-50">
                        <div className="bg-white rounded-lg shadow-xl py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-[#E4572E]/5 hover:text-[#E4572E] transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-[#E4572E] transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center space-x-2 text-sm">
              <button className="text-gray-700 hover:text-[#E4572E] font-medium">
                NL
              </button>
              <span className="text-gray-300">|</span>
              <button className="text-gray-400 hover:text-[#E4572E]">EN</button>
            </div>

            {/* CTA Button */}
            <CTAButton variant="header" className="whitespace-nowrap">
              Plan een Gratis Intro
            </CTAButton>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
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
          <div className="lg:hidden pb-4 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:text-[#E4572E] font-medium flex items-center justify-between"
                      >
                        {item.name}
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === item.name ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openDropdown === item.name && (
                        <div className="bg-gray-50 py-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-8 py-2 text-gray-600 hover:text-[#E4572E] text-sm"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:text-[#E4572E] font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mx-4 mt-4">
                <CTAButton variant="header" className="w-full text-center">
                  Plan een Gratis Intro
                </CTAButton>
              </div>

              {/* Language Toggle Mobile */}
              <div className="flex items-center justify-center space-x-2 text-sm mt-4">
                <button className="text-gray-700 hover:text-[#E4572E] font-medium">NL</button>
                <span className="text-gray-300">|</span>
                <button className="text-gray-400 hover:text-[#E4572E]">EN</button>
              </div>
            </div>
          </div>
        )}
      </nav>
      <HighLevelPopup />
    </header>
  );
}
