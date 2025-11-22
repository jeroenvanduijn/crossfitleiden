"use client";

import { useEffect } from "react";

export default function HighLevelPopup() {
  useEffect(() => {
    // Load the HighLevel script
    const script = document.createElement('script');
    script.src = 'https://kilo.gymleadmachine.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <iframe
      src="https://kilo.gymleadmachine.com/widget/form/nGDExYgYZcuHjGNwCsue"
      style={{ display: 'none', width: '100%', height: '100%', border: 'none', borderRadius: '7px' }}
      id="popup-nGDExYgYZcuHjGNwCsue"
      data-layout='{"id":"POPUP"}'
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Website Form"
      data-height="340"
      data-layout-iframe-id="popup-nGDExYgYZcuHjGNwCsue"
      data-form-id="nGDExYgYZcuHjGNwCsue"
      title="Website Form"
    />
  );
}

// Function to trigger the popup - export this so buttons can use it
export function openHighLevelPopup() {
  // The HighLevel script should handle showing the popup
  // Trigger by dispatching a custom event or calling their API
  const iframe = document.getElementById('popup-nGDExYgYZcuHjGNwCsue');
  if (iframe) {
    // HighLevel's script should handle the popup trigger
    const event = new CustomEvent('show-popup');
    window.dispatchEvent(event);
  }
}
