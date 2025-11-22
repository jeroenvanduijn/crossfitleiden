"use client";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'hero' | 'secondary';
}

export default function CTAButton({ children, className = '', variant = 'primary' }: CTAButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Try to find and click the HighLevel form trigger
    const iframe = document.getElementById('popup-nGDExYgYZcuHjGNwCsue') as HTMLIFrameElement;

    // HighLevel forms typically need a trigger click
    // The form should auto-show because of data-trigger-type="alwaysShow"
    // But we can also manually trigger it
    if (iframe) {
      iframe.style.display = 'block';

      // If there's a HighLevel API available, use it
      if (window.hl_form_embed) {
        window.hl_form_embed.show('nGDExYgYZcuHjGNwCsue');
      }
    }
  };

  const baseClasses = 'inline-block font-bold transition-all cursor-pointer';

  const variantClasses = {
    primary: 'bg-jonquil text-gray-900 px-8 py-3 rounded-lg hover:bg-jonquil/90 shadow-md hover:shadow-lg',
    hero: 'bg-jonquil text-gray-900 px-8 py-4 rounded-lg hover:bg-jonquil/90 shadow-lg text-lg',
    secondary: 'bg-cinnabar text-white px-8 py-4 rounded-lg hover:bg-cinnabar/90 shadow-md'
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

// Extend window type for TypeScript
declare global {
  interface Window {
    hl_form_embed?: {
      show: (formId: string) => void;
    };
  }
}
