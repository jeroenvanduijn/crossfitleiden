"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Over ons",
      href: "#",
      dropdown: [
        { name: "Ons Verhaal", href: "/over-ons" },
        { name: "Team", href: "/over-ons#team" },
        { name: "Community & Events", href: "/over-ons#community" },
      ],
    },
    {
      name: "Aanbod",
      href: "#",
      dropdown: [
        { name: "Groepslessen", href: "/aanbod/groepslessen" },
        { name: "Personal Training", href: "/aanbod/private-coaching" },
        { name: "Small Group / Semi-Private", href: "/aanbod/semi-private" },
        { name: "Nutrition", href: "/nutrition" },
        { name: "Kickstart", href: "/kickstart" },
        { name: "HYROX", href: "/aanbod/hyrox" },
        { name: "Workshops", href: "/aanbod/workshops" },
        { name: "Teens", href: "/aanbod/teens" },
      ],
    },
    { name: "Rooster", href: "/rooster" },
    { name: "Tarieven", href: "/tarieven" },
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
            <span className="text-2xl font-heading font-bold text-cinnabar">
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
                    <button className="text-gray-700 hover:text-cinnabar transition-colors font-medium flex items-center gap-1">
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
                            className="block px-4 py-2 text-gray-700 hover:bg-cinnabar/5 hover:text-cinnabar transition-colors"
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
                    className="text-gray-700 hover:text-cinnabar transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center space-x-2 text-sm">
              <button className="text-gray-700 hover:text-cinnabar font-medium">
                NL
              </button>
              <span className="text-gray-300">|</span>
              <button className="text-gray-400 hover:text-cinnabar">EN</button>
            </div>

            {/* CTA Button */}
            <Link href="/starten" className="bg-jonquil text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-jonquil/90 transition-all shadow-md whitespace-nowrap">
              Plan een Gratis Intro
            </Link>
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
                        className="w-full text-left px-4 py-2 text-gray-700 hover:text-cinnabar font-medium flex items-center justify-between"
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
                              className="block px-8 py-2 text-gray-600 hover:text-cinnabar text-sm"
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
                      className="block px-4 py-2 text-gray-700 hover:text-cinnabar font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/starten"
                className="bg-jonquil text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-jonquil/90 transition-all shadow-md text-center mx-4 mt-4 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Plan een Gratis Intro
              </Link>

              {/* Language Toggle Mobile */}
              <div className="flex items-center justify-center space-x-2 text-sm mt-4">
                <button className="text-gray-700 hover:text-cinnabar font-medium">NL</button>
                <span className="text-gray-300">|</span>
                <button className="text-gray-400 hover:text-cinnabar">EN</button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
