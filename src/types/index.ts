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
  image: string;
  videoUrl?: string;
}

export interface ServicePackage {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  priceRange: string;
  features: string[];
  highlighted?: boolean;
}

export interface SiteData {
  name: string;
  role: string;
  tagline: string;
  headline: string;
  headlineEmphasis: string;
  manifesto: string;
  navLinks: NavLink[];
  contact: ContactInfo;
  projects: Project[];
  packages: ServicePackage[];
}
