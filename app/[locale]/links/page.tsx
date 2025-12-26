"use client";

import { useLocale } from 'next-intl';
import { track } from '@vercel/analytics';
import { useEffect } from 'react';

export default function LinksPage() {
  useEffect(() => {
    document.title = 'Links | CrossFit Leiden';
  }, []);

  const locale = useLocale();

  const handleLinkClick = (linkName: string, url: string) => {
    track('Links Page Click', {
      link: linkName,
      locale: locale,
      destination: url
    });
  };

  const content = {
    nl: {
      title: "CrossFit Leiden",
      tagline: "Everyday People, Exceptionally Strong 💪",
      stats: "400+ leden · ⭐ 4.9 Google Reviews · 📍 Leiden",
      eventSection: "EVENT",
      startSection: "START HIER",
      contactSection: "CONTACT & MEER",
      links: {
        events: [
          {
            icon: "🏃",
            bgColor: "#4DB8A8",
            title: "Hyrox Simulatie",
            subtitle: "Test jezelf · Ook voor niet-leden",
            url: "https://hyrox.crossfitleiden.com",
            badge: "EVENT"
          }
        ],
        start: [
          {
            icon: "⭐",
            bgColor: "#000000",
            title: "Gratis Kennismaking",
            subtitle: "Bespreek je doelen met een coach",
            url: `https://www.crossfitleiden.com/${locale}/gratis-intro`,
            highlight: true
          },
          {
            icon: "💪",
            bgColor: "#E25C2A",
            title: "28 Dagen Kickstart",
            subtitle: "Nieuwe gewoontes in 4 weken",
            url: `https://www.crossfitleiden.com/${locale}/kickstart`,
            highlight: false
          },
          {
            icon: "🎒",
            bgColor: "#5B6B8E",
            title: "Drop-In Boeken",
            subtitle: "Op reis? Train met ons mee",
            url: `https://www.crossfitleiden.com/${locale}/info/drop-in`,
            highlight: false
          }
        ],
        contact: [
          {
            icon: "💬",
            bgColor: "#25D366",
            title: "WhatsApp Ons",
            subtitle: "Direct contact via WhatsApp",
            url: "https://wa.me/31712340477",
            highlight: false
          },
          {
            icon: "📅",
            bgColor: "#E25C2A",
            title: "Rooster",
            subtitle: "Bekijk het lesrooster",
            url: `https://www.crossfitleiden.com/${locale}/rooster`,
            highlight: false
          },
          {
            icon: "📝",
            bgColor: "#4A5568",
            title: "Blog",
            subtitle: "Tips, verhalen en updates",
            url: `https://www.crossfitleiden.com/${locale}/blog`,
            highlight: false
          }
        ]
      }
    },
    en: {
      title: "CrossFit Leiden",
      tagline: "Everyday People, Exceptionally Strong 💪",
      stats: "400+ members · ⭐ 4.9 Google Reviews · 📍 Leiden",
      eventSection: "EVENT",
      startSection: "START HERE",
      contactSection: "CONTACT & MORE",
      links: {
        events: [
          {
            icon: "🏃",
            bgColor: "#4DB8A8",
            title: "Hyrox Simulation",
            subtitle: "Test yourself · Also for non-members",
            url: "https://hyrox.crossfitleiden.com",
            badge: "EVENT"
          }
        ],
        start: [
          {
            icon: "⭐",
            bgColor: "#000000",
            title: "Free Introduction",
            subtitle: "Discuss your goals with a coach",
            url: `https://www.crossfitleiden.com/${locale}/gratis-intro`,
            highlight: true
          },
          {
            icon: "💪",
            bgColor: "#E25C2A",
            title: "28 Day Kickstart",
            subtitle: "New habits in 4 weeks",
            url: `https://www.crossfitleiden.com/${locale}/kickstart`,
            highlight: false
          },
          {
            icon: "🎒",
            bgColor: "#5B6B8E",
            title: "Book a Drop-In",
            subtitle: "Traveling? Train with us",
            url: `https://www.crossfitleiden.com/${locale}/info/drop-in`,
            highlight: false
          }
        ],
        contact: [
          {
            icon: "💬",
            bgColor: "#25D366",
            title: "WhatsApp Us",
            subtitle: "Direct contact via WhatsApp",
            url: "https://wa.me/31712340477",
            highlight: false
          },
          {
            icon: "📅",
            bgColor: "#E25C2A",
            title: "Schedule",
            subtitle: "View the class schedule",
            url: `https://www.crossfitleiden.com/${locale}/rooster`,
            highlight: false
          },
          {
            icon: "📝",
            bgColor: "#4A5568",
            title: "Blog",
            subtitle: "Tips, stories and updates",
            url: `https://www.crossfitleiden.com/${locale}/blog`,
            highlight: false
          }
        ]
      }
    }
  };

  const t = content[locale as keyof typeof content] || content.nl;

  return (
    <div className="links-page">
      <div className="container">
        <header className="profile">
          <h1>{t.title}</h1>
          <p className="tagline">{t.tagline}</p>
          <p className="stats">{t.stats}</p>
        </header>

        {/* Events Section */}
        {t.links.events.length > 0 && (
          <section className="link-section">
            {t.links.events.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="link-item"
                onClick={() => handleLinkClick(link.title, link.url)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="link-icon" style={{ backgroundColor: link.bgColor }}>
                  {link.icon}
                </div>
                <div className="link-text">
                  <div className="link-header">
                    <span className="link-title">{link.title}</span>
                    {link.badge && <span className="badge">{link.badge}</span>}
                  </div>
                  <span className="link-subtitle">{link.subtitle}</span>
                </div>
                <span className="link-arrow">›</span>
              </a>
            ))}
          </section>
        )}

        {/* Start Section */}
        <div className="section-divider">{t.startSection}</div>
        <section className="link-section">
          {t.links.start.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={`link-item ${link.highlight ? 'highlight' : ''}`}
              onClick={() => handleLinkClick(link.title, link.url)}
            >
              <div className="link-icon" style={{ backgroundColor: link.bgColor }}>
                {link.icon}
              </div>
              <div className="link-text">
                <span className="link-title">{link.title}</span>
                <span className="link-subtitle">{link.subtitle}</span>
              </div>
              <span className="link-arrow">›</span>
            </a>
          ))}
        </section>

        {/* Contact Section */}
        <div className="section-divider">{t.contactSection}</div>
        <section className="link-section">
          {t.links.contact.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="link-item"
              onClick={() => handleLinkClick(link.title, link.url)}
            >
              <div className="link-icon" style={{ backgroundColor: link.bgColor }}>
                {link.icon}
              </div>
              <div className="link-text">
                <span className="link-title">{link.title}</span>
                <span className="link-subtitle">{link.subtitle}</span>
              </div>
              <span className="link-arrow">›</span>
            </a>
          ))}
        </section>
      </div>

      <style jsx>{`
        .links-page {
          min-height: 100vh;
          background: #E25C2A;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .container {
          max-width: 100%;
          margin: 0;
          padding: 0;
        }

        .profile {
          text-align: center;
          padding: 3rem 1.5rem 2rem;
          color: white;
        }

        .profile h1 {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          color: white;
        }

        .tagline {
          font-size: 1.125rem;
          margin: 0 0 1rem 0;
          color: rgba(255, 255, 255, 0.95);
        }

        .stats {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.85);
          margin: 0;
        }

        .section-divider {
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1px;
          padding: 2rem 0 1rem;
        }

        .link-section {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 0 1rem;
          margin-bottom: 1rem;
        }

        .link-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.25rem;
          background: white;
          border-radius: 12px;
          text-decoration: none;
          color: #1a202c;
          transition: all 0.2s ease;
        }

        .link-item:active {
          transform: scale(0.98);
        }

        .link-item.highlight {
          background: #FFD93D;
          font-weight: 600;
        }

        .link-icon {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .link-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.125rem;
        }

        .link-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .link-title {
          font-size: 1rem;
          font-weight: 600;
          color: #1a202c;
        }

        .badge {
          background: #FF4747;
          color: white;
          font-size: 0.625rem;
          font-weight: 700;
          padding: 0.125rem 0.5rem;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .link-subtitle {
          font-size: 0.875rem;
          color: #718096;
          line-height: 1.3;
        }

        .link-arrow {
          font-size: 1.5rem;
          color: #CBD5E0;
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .profile h1 {
            font-size: 1.75rem;
          }

          .tagline {
            font-size: 1rem;
          }

          .stats {
            font-size: 0.8125rem;
          }

          .link-item {
            padding: 0.875rem 1rem;
          }

          .link-icon {
            width: 44px;
            height: 44px;
            font-size: 1.375rem;
          }

          .link-title {
            font-size: 0.9375rem;
          }

          .link-subtitle {
            font-size: 0.8125rem;
          }
        }
      `}</style>
    </div>
  );
}
