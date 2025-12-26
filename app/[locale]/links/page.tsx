"use client";

import { useLocale } from 'next-intl';
import { track } from '@vercel/analytics';
import { useEffect } from 'react';

export default function LinksPage() {
  // Set page title dynamically
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
      links: [
        {
          icon: "🎉",
          title: "Bring A Friend Weekend",
          subtitle: "25 & 26 januari - Neem je vriend(in) gratis mee!",
          url: "https://crossfitleiden.nl/nl/blog/bring-a-friend-weekend-january-2025",
          highlight: false
        },
        {
          icon: "🏃",
          title: "Hyrox Simulation",
          subtitle: "1 februari - Test jezelf in dit Hyrox event",
          url: "https://crossfitleiden.nl/nl/blog/hyrox-simulation-february-2025",
          highlight: false
        },
        {
          icon: "✨",
          title: "Gratis Kennismaking",
          subtitle: "Start vandaag nog - Plan je gratis intro",
          url: "https://crossfitleiden.nl/nl/gratis-intro",
          highlight: true
        },
        {
          icon: "🚀",
          title: "28 Dagen Kickstart",
          subtitle: "Ons beginnersprogramma - Voor iedereen toegankelijk",
          url: "https://crossfitleiden.nl/nl/kickstart",
          highlight: false
        },
        {
          icon: "📅",
          title: "Drop-In Boeken",
          subtitle: "Op bezoek in Leiden? Boek een losse les",
          url: "https://kilo.gymleadmachine.com/widget/bookings/crossfitleidendropin",
          highlight: false
        },
        {
          icon: "💬",
          title: "WhatsApp",
          subtitle: "Stuur ons een bericht",
          url: "https://wa.me/31640876761",
          highlight: false
        },
        {
          icon: "🎙️",
          title: "BoxTalk Podcast",
          subtitle: "Luister naar onze podcast over CrossFit en fitness",
          url: "https://crossfitleiden.nl/nl/blog",
          highlight: false
        },
        {
          icon: "📝",
          title: "Blog",
          subtitle: "Lees onze laatste artikelen",
          url: "https://crossfitleiden.nl/nl/blog",
          highlight: false
        }
      ]
    },
    en: {
      title: "CrossFit Leiden",
      tagline: "Everyday People, Exceptionally Strong 💪",
      links: [
        {
          icon: "🎉",
          title: "Bring A Friend Weekend",
          subtitle: "January 25 & 26 - Bring your friend for free!",
          url: "https://crossfitleiden.nl/en/blog/bring-a-friend-weekend-january-2025",
          highlight: false
        },
        {
          icon: "🏃",
          title: "Hyrox Simulation",
          subtitle: "February 1st - Test yourself in this Hyrox event",
          url: "https://crossfitleiden.nl/en/blog/hyrox-simulation-february-2025",
          highlight: false
        },
        {
          icon: "✨",
          title: "Free Introduction",
          subtitle: "Start today - Schedule your free intro",
          url: "https://crossfitleiden.nl/en/gratis-intro",
          highlight: true
        },
        {
          icon: "🚀",
          title: "28 Day Kickstart",
          subtitle: "Our beginner program - Accessible for everyone",
          url: "https://crossfitleiden.nl/en/kickstart",
          highlight: false
        },
        {
          icon: "📅",
          title: "Book a Drop-In",
          subtitle: "Visiting Leiden? Book a single class",
          url: "https://kilo.gymleadmachine.com/widget/bookings/crossfitleidendropin",
          highlight: false
        },
        {
          icon: "💬",
          title: "WhatsApp",
          subtitle: "Send us a message",
          url: "https://wa.me/31640876761",
          highlight: false
        },
        {
          icon: "🎙️",
          title: "BoxTalk Podcast",
          subtitle: "Listen to our podcast about CrossFit and fitness",
          url: "https://crossfitleiden.nl/en/blog",
          highlight: false
        },
        {
          icon: "📝",
          title: "Blog",
          subtitle: "Read our latest articles",
          url: "https://crossfitleiden.nl/en/blog",
          highlight: false
        }
      ]
    }
  };

  const t = content[locale as keyof typeof content] || content.nl;

  return (
    <div className="links-page">
      <div className="container">
        <header className="profile">
          <div className="avatar">CFL</div>
          <h1>{t.title}</h1>
          <p className="tagline">{t.tagline}</p>
        </header>

        <nav className="links">
          {t.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={`link-item ${link.highlight ? 'highlight' : ''}`}
              onClick={() => handleLinkClick(link.title, link.url)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="link-icon">{link.icon}</span>
              <span className="link-text">
                <span className="link-title">{link.title}</span>
                <span className="link-subtitle">{link.subtitle}</span>
              </span>
              <span className="link-arrow">→</span>
            </a>
          ))}
        </nav>

        <footer className="footer">
          <p>© 2025 CrossFit Leiden</p>
        </footer>
      </div>

      <style jsx>{`
        .links-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          padding: 2rem 1rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .container {
          max-width: 680px;
          margin: 0 auto;
        }

        .profile {
          text-align: center;
          margin-bottom: 2.5rem;
          animation: fadeInDown 0.6s ease-out;
        }

        .avatar {
          width: 96px;
          height: 96px;
          margin: 0 auto 1.25rem;
          background: linear-gradient(135deg, #E25C2A 0%, #F9C846 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 700;
          color: white;
          box-shadow: 0 8px 24px rgba(226, 92, 42, 0.3);
          transition: transform 0.3s ease;
        }

        .avatar:hover {
          transform: scale(1.05);
        }

        .profile h1 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1a202c;
          margin: 0 0 0.5rem 0;
        }

        .tagline {
          font-size: 1rem;
          color: #4a5568;
          margin: 0;
        }

        .links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .link-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          background: white;
          border-radius: 16px;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: fadeInUp 0.5s ease-out backwards;
          border: 2px solid transparent;
        }

        .link-item:nth-child(1) { animation-delay: 0.1s; }
        .link-item:nth-child(2) { animation-delay: 0.15s; }
        .link-item:nth-child(3) { animation-delay: 0.2s; }
        .link-item:nth-child(4) { animation-delay: 0.25s; }
        .link-item:nth-child(5) { animation-delay: 0.3s; }
        .link-item:nth-child(6) { animation-delay: 0.35s; }
        .link-item:nth-child(7) { animation-delay: 0.4s; }
        .link-item:nth-child(8) { animation-delay: 0.45s; }

        .link-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
          border-color: #E25C2A;
        }

        .link-item.highlight {
          background: linear-gradient(135deg, #E25C2A 0%, #F9C846 100%);
          color: white;
          font-weight: 600;
          box-shadow: 0 8px 24px rgba(226, 92, 42, 0.3);
        }

        .link-item.highlight:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 16px 32px rgba(226, 92, 42, 0.4);
        }

        .link-item.highlight .link-subtitle {
          color: rgba(255, 255, 255, 0.9);
        }

        .link-icon {
          font-size: 1.75rem;
          flex-shrink: 0;
          filter: grayscale(0);
          transition: transform 0.3s ease;
        }

        .link-item:hover .link-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .link-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .link-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: inherit;
        }

        .link-subtitle {
          font-size: 0.875rem;
          color: #718096;
          line-height: 1.4;
        }

        .link-arrow {
          font-size: 1.5rem;
          color: #cbd5e0;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .link-item:hover .link-arrow {
          color: #E25C2A;
          transform: translateX(4px);
        }

        .link-item.highlight .link-arrow {
          color: rgba(255, 255, 255, 0.8);
        }

        .link-item.highlight:hover .link-arrow {
          color: white;
        }

        .footer {
          text-align: center;
          padding: 2rem 0;
          color: #718096;
          font-size: 0.875rem;
          animation: fadeIn 0.8s ease-out 0.5s backwards;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (max-width: 640px) {
          .links-page {
            padding: 1.5rem 1rem;
          }

          .avatar {
            width: 80px;
            height: 80px;
            font-size: 1.75rem;
          }

          .profile h1 {
            font-size: 1.5rem;
          }

          .tagline {
            font-size: 0.9375rem;
          }

          .link-item {
            padding: 1rem 1.25rem;
          }

          .link-icon {
            font-size: 1.5rem;
          }

          .link-title {
            font-size: 1rem;
          }

          .link-subtitle {
            font-size: 0.8125rem;
          }
        }
      `}</style>
    </div>
  );
}
