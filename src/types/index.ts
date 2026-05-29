export interface NavLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsappUrl: string;
  instagram: {
    handle: string;
    url: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  /** Vídeo de preview do projeto (loop mudo no card) */
  videoUrl: string;
  image?: string;
}

export interface SiteData {
  name: string;
  role: string;
  headline: string;
  headlineEmphasis: string;
  tagline: string;
  services: string;
  ctaPrimary: string;
  ctaFooter: string;
  ctaFooterEmphasis: string;
  navLinks: NavLink[];
  contact: ContactInfo;
  projects: Project[];
  heroVideoUrl: string;
}
