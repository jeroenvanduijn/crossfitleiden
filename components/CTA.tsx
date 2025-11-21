import Link from "next/link";

interface CTAProps {
  variant?: 
    | "primary-intro" 
    | "primary-intro-alt" 
    | "primary-intro-alt2"
    | "secondary-support"
    | "secondary-support-alt"
    | "secondary-support-alt2"
    | "soft-info"
    | "soft-info-alt"
    | "soft-info-alt2"
    | "content-download";
  href?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const variantStyles = {
  "primary-intro": "bg-cinnabar text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all text-lg",
  "primary-intro-alt": "bg-cinnabar text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all text-lg inline-block",
  "primary-intro-alt2": "bg-white text-cinnabar px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all text-lg",
  "secondary-support": "bg-verdigris text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all",
  "secondary-support-alt": "bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cinnabar transition-all",
  "secondary-support-alt2": "bg-transparent border-2 border-cinnabar text-cinnabar px-8 py-4 rounded-lg font-semibold hover:bg-cinnabar hover:text-white transition-all",
  "soft-info": "text-cinnabar font-semibold hover:underline text-lg",
  "soft-info-alt": "bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all",
  "soft-info-alt2": "text-cinnabar font-semibold hover:text-cinnabar/80 transition-colors",
  "content-download": "bg-jonquil text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
};

const defaultTexts = {
  "primary-intro": "Plan een Gratis Intro",
  "primary-intro-alt": "Ja, ik wil kennismaken",
  "primary-intro-alt2": "Plan een Gratis Intro",
  "secondary-support": "Ontdek hoe makkelijk starten kan",
  "secondary-support-alt": "Kom langs voor een persoonlijk gesprek",
  "secondary-support-alt2": "Maak kennis met onze community",
  "soft-info": "Zet de eerste stap",
  "soft-info-alt": "Stel je vraag aan ons team",
  "soft-info-alt2": "Bekijk het rooster",
  "content-download": "Download gratis e-book"
};

export default function CTA({ 
  variant = "primary-intro", 
  href = "/starten",
  className = "",
  onClick,
  children 
}: CTAProps) {
  const baseStyles = variantStyles[variant];
  const text = children || defaultTexts[variant];
  
  const combinedClassName = `${baseStyles} ${className}`;

  if (onClick) {
    return (
      <button onClick={onClick} className={combinedClassName}>
        {text}
      </button>
    );
  }

  return (
    <Link href={href} className={combinedClassName}>
      {text}
    </Link>
  );
}
