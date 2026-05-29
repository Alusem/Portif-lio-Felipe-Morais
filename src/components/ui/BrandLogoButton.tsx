import Image from "next/image";
import Link from "next/link";

interface BrandLogoButtonProps {
  href: string;
  className?: string;
}

/** Link com logo FP do Felipe (substitui texto "Instagram"). */
export function BrandLogoButton({ href, className = "" }: BrandLogoButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram @zzfivee"
      className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-cream/30 p-2.5 transition-all hover:border-cream/60 hover:bg-cream/5 ${className}`}
    >
      <Image
        src="/images/brand-logo.png"
        alt=""
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />
    </Link>
  );
}
