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
  videoUrl: string;
  posterUrl: string;
  /** Link externo da produção (YouTube ou Instagram) */
  watchUrl?: string;
}

export interface AboutInfo {
  label: string;
  name: string;
  paragraphs: string[];
  profileImage: string;
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
  navLinks: NavLink[];
  contact: ContactInfo;
  about: AboutInfo;
  projects: Project[];
  heroVideoUrl: string;
  heroPosterUrl: string;
}
