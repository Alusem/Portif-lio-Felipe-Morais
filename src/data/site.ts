import type { SiteData } from "@/types";

export const siteData: SiteData = {
  name: "Felipe Morais",
  role: "Documentarista",
  tagline: "Produção de documentários focados em contar histórias reais com impacto na área social e missionária.",
  headline: "Histórias reais.",
  headlineEmphasis: "Impacto eterno.",
  manifesto:
    "Acredito que toda instituição que transforma vidas precisa ter sua história bem contada, não só para mostrar o que faz, mas para gerar conexão, inspirar pessoas e abrir novas oportunidades. Já produzi projetos na área social e missionária, sempre com foco em transmitir emoção, propósito e verdade.",
  navLinks: [
    { label: "Trabalhos", href: "#trabalhos" },
    { label: "Pacotes", href: "#pacotes" },
    { label: "Contato", href: "#contato" },
  ],
  contact: {
    email: "felipevales019@gmail.com",
    phone: "+55 86 98808-3672",
    whatsappUrl: "https://wa.me/5586988083672",
    instagram: {
      handle: "@zzfivee",
      url: "https://www.instagram.com/zzfivee/",
    },
  },
  projects: [
    {
      id: "mandacaru-2026",
      title: "Escola de Missões Mandacaru 2026",
      description:
        "Registro de uma jornada de formação e envio, mostrando o impacto do evangelismo na vida de jovens e comunidades.",
      image: "/images/placeholders/project-1.svg",
    },
    {
      id: "batismo-pib-2025",
      title: "Documentário Batismo PIB Dignidade 2025",
      description:
        "Um retrato de fé e transformação, capturando o significado do batismo na vida de novos convertidos.",
      image: "/images/placeholders/project-2.svg",
    },
    {
      id: "missao-russas",
      title: "Documentário Missão Russas",
      description:
        "Sobre ação missionária, evidenciando o impacto do evangelho através de histórias reais e vivências no campo.",
      image: "/images/placeholders/project-3.svg",
    },
    {
      id: "alcantara",
      title: "Documentário Alcântara",
      description:
        "Registro cinematográfico de histórias de fé e transformação em comunidades locais.",
      image: "/images/placeholders/project-4.svg",
    },
    {
      id: "pib-divineia-25",
      title: "Documentário 25 Anos PIB Divineia",
      description:
        "Celebração de uma trajetória marcada por fé, crescimento e impacto na comunidade ao longo de gerações.",
      image: "/images/placeholders/project-5.svg",
    },
    {
      id: "vivendo-amor",
      title: "Documentário Vivendo o Amor de Cristo",
      description:
        "Um registro de ações práticas de amor ao próximo, revelando como pequenas atitudes geram grandes transformações.",
      image: "/images/placeholders/project-6.svg",
    },
  ],
  packages: [
    {
      id: "basico",
      number: "01",
      name: "Básico",
      subtitle: "Essencial",
      priceRange: "R$ 3.000 – R$ 4.000",
      features: [
        "1 diária de captação",
        "Entrevistas simples",
        "Imagens de apoio",
        "Edição objetiva (1–2 min)",
        "Ideal para redes sociais",
      ],
    },
    {
      id: "intermediario",
      number: "02",
      name: "Intermediário",
      subtitle: "Narrativo",
      priceRange: "R$ 4.500 – R$ 6.000",
      features: [
        "2 diárias de captação",
        "Direção de entrevistas",
        "Captação completa",
        "Narrativa estruturada",
        "Correção de cor (3–5 min)",
      ],
    },
    {
      id: "avancado",
      number: "03",
      name: "Avançado",
      subtitle: "Documentário de Impacto",
      priceRange: "R$ 6.500 – R$ 8.000+",
      highlighted: true,
      features: [
        "2 a 3 diárias de captação",
        "Direção criativa",
        "Storytelling profundo",
        "Captação cinematográfica",
        "Color grading e sound design (5–10+ min)",
        "Ideal para captação de recursos",
      ],
    },
  ],
};
