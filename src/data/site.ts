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
  heroPosterUrl: "/images/posters/hero.jpg",
  navLinks: [
    { label: "Sobre", href: "#sobre" },
    { label: "Trabalhos", href: "#trabalhos" },
    { label: "Contato", href: "#contato" },
  ],
  about: {
    label: "Sobre",
    name: "Felipe Morais",
    profileImage: "/images/felipe-perfil.jpg",
    paragraphs: [
      "Felipe Morais é um cineasta e designer brasileiro apaixonado por contar histórias que transformam vidas.",
      "Especializado em documentários e filmes institucionais, dedica seu trabalho a dar voz a pessoas, organizações e projetos que geram impacto real na sociedade. Sua abordagem combina narrativa, estética cinematográfica e sensibilidade humana para criar filmes que conectam, inspiram e permanecem na memória.",
      "Com experiência em produções sociais e missionárias, acredita que histórias autênticas têm o poder de mobilizar pessoas, fortalecer causas e abrir novas oportunidades para quem faz a diferença no mundo.",
    ],
  },
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
      posterUrl: "/images/posters/escola-missoes.jpg",
    },
    {
      id: "batismo-pib-2025",
      title: "Documentário Batismo PIB Dignidade 2025",
      description:
        "Um retrato de fé e transformação, capturando o significado do batismo na vida de novos convertidos.",
      videoUrl: "/videos/batismo-pib.mp4",
      posterUrl: "/images/posters/batismo-pib.jpg",
    },
    {
      id: "missao-russas",
      title: "Documentário Missão Russas",
      description:
        "Sobre ação missionária, evidenciando o impacto do evangelho através de histórias reais e vivências no campo.",
      videoUrl: "/videos/missao-russas.mp4",
      posterUrl: "/images/posters/missao-russas.jpg",
    },
    {
      id: "alcantara",
      title: "Documentário Alcântara",
      description:
        "Registro cinematográfico de histórias de fé e transformação em comunidades locais.",
      videoUrl: "/videos/alcantara.mp4",
      posterUrl: "/images/posters/alcantara.jpg",
    },
    {
      id: "pib-divineia-25",
      title: "Documentário 25 Anos PIB Divineia",
      description:
        "Celebração de uma trajetória marcada por fé, crescimento e impacto na comunidade ao longo de gerações.",
      videoUrl: "/videos/pib-divineia.mp4",
      posterUrl: "/images/posters/pib-divineia.jpg",
    },
    {
      id: "vivendo-amor",
      title: "Documentário Vivendo o Amor de Cristo",
      description:
        "Um registro de ações práticas de amor ao próximo, revelando como pequenas atitudes geram grandes transformações.",
      videoUrl: "/videos/vivendo-amor.mp4",
      posterUrl: "/images/posters/vivendo-amor.jpg",
    },
  ],
};
