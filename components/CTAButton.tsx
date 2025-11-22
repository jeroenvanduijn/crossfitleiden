"use client";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'hero' | 'secondary';
}

export default function CTAButton({ children, className = '', variant = 'primary' }: CTAButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Call the global openCFLPopup function defined in HighLevelPopup component
    if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
      (window as any).openCFLPopup();
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
