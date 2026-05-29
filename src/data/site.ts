import type { SiteData } from "@/types";

export const siteData: SiteData = {
  name: "Felipe Morais",
  role: "Produtor audiovisual",
  headline: "Histórias reais contadas com",
  headlineEmphasis: "verdade, estética e impacto.",
  tagline:
    "Transformamos histórias reais em experiências cinematográficas memoráveis.",
  services:
    "Produção de documentários, curtas-metragens, vídeos institucionais, publicidade e filmes de casamento.",
  ctaPrimary: "Vamos contar a sua história",
  ctaFooter: "Vamos contar a",
  ctaFooterEmphasis: "sua história",
  heroVideoUrl: "/videos/hero.mp4",
  navLinks: [
    { label: "Trabalhos", href: "#trabalhos" },
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
      videoUrl: "/videos/escola-missoes.mp4",
    },
    {
      id: "batismo-pib-2025",
      title: "Documentário Batismo PIB Dignidade 2025",
      description:
        "Um retrato de fé e transformação, capturando o significado do batismo na vida de novos convertidos.",
      videoUrl: "/videos/batismo-pib.mp4",
    },
    {
      id: "missao-russas",
      title: "Documentário Missão Russas",
      description:
        "Sobre ação missionária, evidenciando o impacto do evangelho através de histórias reais e vivências no campo.",
      videoUrl: "/videos/missao-russas.mp4",
    },
    {
      id: "alcantara",
      title: "Documentário Alcântara",
      description:
        "Registro cinematográfico de histórias de fé e transformação em comunidades locais.",
      videoUrl: "/videos/alcantara.mp4",
    },
    {
      id: "pib-divineia-25",
      title: "Documentário 25 Anos PIB Divineia",
      description:
        "Celebração de uma trajetória marcada por fé, crescimento e impacto na comunidade ao longo de gerações.",
      videoUrl: "/videos/batismo-pib.mp4",
    },
    {
      id: "vivendo-amor",
      title: "Documentário Vivendo o Amor de Cristo",
      description:
        "Um registro de ações práticas de amor ao próximo, revelando como pequenas atitudes geram grandes transformações.",
      videoUrl: "/videos/vivendo-amor.mp4",
    },
  ],
};
