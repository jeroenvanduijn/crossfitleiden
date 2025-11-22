"use client";

import { useEffect } from "react";

export default function HighLevelPopup() {
  useEffect(() => {
    // Load the HighLevel script
    const script = document.createElement('script');
    script.src = 'https://kilo.gymleadmachine.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Open popup function (called by CTA buttons via window.openCFLPopup())
    (window as any).openCFLPopup = () => {
      const modal = document.getElementById('cfl-popup-modal');
      if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent body scroll
      }
    };

    // Close popup function
    (window as any).closeCFLPopup = () => {
      const modal = document.getElementById('cfl-popup-modal');
      if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore body scroll
      }
    };

    // Close on ESC key
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        (window as any).closeCFLPopup();
      }
    };

    // Close when clicking overlay (outside popup)
    const handleOverlayClick = (e: MouseEvent) => {
      const modal = document.getElementById('cfl-popup-modal');
      if (e.target === modal) {
        (window as any).closeCFLPopup();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    const modal = document.getElementById('cfl-popup-modal');
    if (modal) {
      modal.addEventListener('click', handleOverlayClick);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      if (modal) {
        modal.removeEventListener('click', handleOverlayClick);
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      delete (window as any).openCFLPopup;
      delete (window as any).closeCFLPopup;
    };
  }, []);

  return (
    <>
      {/* Modal Overlay + Popup Container */}
      <div id="cfl-popup-modal" style={{ display: 'none' }}>
        {/* Popup Content */}
        <div className="cfl-popup-content">
          {/* Close Button */}
          <button
            className="cfl-popup-close"
            onClick={() => (window as any).closeCFLPopup()}
            aria-label="Sluit popup"
          >
            ×
          </button>

          {/* Description */}
          <div className="cfl-popup-header">
            <h3>Plan je gratis intro</h3>
            <p>Het duurt 20 minuten en je hoeft niet te sporten.</p>
          </div>

          {/* HighLevel Form Iframe */}
          <div className="cfl-popup-form">
            <iframe
              src="https://kilo.gymleadmachine.com/widget/form/nGDExYgYZcuHjGNwCsue"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '7px'
              }}
              id="popup-nGDExYgYZcuHjGNwCsue"
              title="Website Form"
            />
          </div>
        </div>
      </div>

      {/* Inline Styles */}
      <style jsx>{`
        /* Overlay */
        #cfl-popup-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        /* Popup Content Container */
        .cfl-popup-content {
          position: relative;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          max-width: 500px;
          width: 100%;
          padding: 32px;
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Close Button */
        .cfl-popup-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: transparent;
          border: none;
          font-size: 32px;
          line-height: 1;
          color: #666;
          cursor: pointer;
          padding: 4px 8px;
          transition: color 0.2s ease;
          z-index: 10;
        }

        .cfl-popup-close:hover {
          color: #000;
        }

        /* Header Section */
        .cfl-popup-header {
          margin-bottom: 24px;
          padding-right: 40px;
        }

        .cfl-popup-header h3 {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 8px 0;
          line-height: 1.3;
        }

        .cfl-popup-header p {
          font-size: 16px;
          color: #666;
          margin: 0;
          line-height: 1.5;
        }

        /* Form Container */
        .cfl-popup-form {
          width: 100%;
          min-height: 400px;
          background: #f9f9f9;
          border-radius: 8px;
          overflow: hidden;
        }

        /* Mobile Responsive */
        @media (max-width: 640px) {
          .cfl-popup-content {
            max-width: 90%;
            padding: 24px;
          }

          .cfl-popup-header h3 {
            font-size: 20px;
          }

          .cfl-popup-header p {
            font-size: 14px;
          }

          .cfl-popup-close {
            top: 12px;
            right: 12px;
            font-size: 28px;
          }

          .cfl-popup-form {
            min-height: 350px;
          }
        }
      `}</style>
    </>
  );
}

/*
NOTE FOR DEVELOPERS:
To open this popup from any CTA button, call:
  window.openCFLPopup()

Example in CTAButton component:
  onClick={() => window.openCFLPopup()}
*/
