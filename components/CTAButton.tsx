"use client";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'header' | 'white-bg' | 'hero';
}

export default function CTAButton({ children, className = '', variant = 'white-bg' }: CTAButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && (window as any).openCFLPopup) {
      (window as any).openCFLPopup();
    }
  };

  const baseClasses = 'inline-block font-bold transition-all cursor-pointer';

  const variantClasses = {
    header: 'bg-[#F4D35E] text-black px-8 py-3 rounded-lg hover:bg-[#F4D35E]/90 shadow-md hover:shadow-lg',
    'white-bg': 'bg-[#E4572E] text-white px-8 py-3 rounded-lg hover:bg-[#E4572E]/90 shadow-md hover:shadow-lg',
    hero: 'bg-[#E4572E] text-white px-8 py-4 rounded-lg hover:bg-[#E4572E]/90 shadow-lg text-lg'
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
