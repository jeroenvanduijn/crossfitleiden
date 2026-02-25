"use client";

import { track } from '@vercel/analytics';

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'header' | 'white-bg' | 'hero';
}

export default function CTAButton({ children, className = '', variant = 'white-bg' }: CTAButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    track('CTA Button Click', { variant, location: 'CTAButton Component' });
    if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
      (window as any).openCFLPopup();
    }
  };

  const baseClasses = 'inline-block font-bold transition-all cursor-pointer';

  const variantClasses = {
    header: 'bg-organic-bg text-cinnabar px-8 py-3 rounded-2xl hover:bg-orange-50 shadow-md hover:shadow-lg border-2 border-cinnabar font-heading',
    'white-bg': 'bg-organic-bg text-cinnabar px-8 py-3 rounded-2xl hover:bg-orange-50 shadow-md hover:shadow-lg border-2 border-cinnabar font-heading',
    hero: 'bg-organic-bg text-cinnabar px-8 py-4 rounded-2xl hover:bg-orange-50 shadow-lg text-lg border-2 border-cinnabar font-heading'
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
