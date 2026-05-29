# Portfólio — Felipe Morais

Site portfólio cinematográfico para o documentarista Felipe Morais, inspirado no design premium do [Auteur Studios](https://auteurstudios.au).

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**

## Estrutura de pastas

```
src/
├── app/              # Layout, página principal e estilos globais
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, Showcase, Pacotes
│   └── ui/           # Botões, cards, ScrollReveal
├── data/site.ts      # Conteúdo do site (textos, projetos, pacotes)
├── hooks/            # useReducedMotion
├── lib/animations.ts # Variants Framer Motion
└── types/            # Tipos TypeScript
public/
└── images/placeholders/  # Imagens temporárias (trocar em site.ts)
```

## Desenvolvimento local

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm start
```

## Atualizar conteúdo

Edite [`src/data/site.ts`](src/data/site.ts) para alterar textos, projetos, pacotes e contatos. Para trocar imagens, substitua os arquivos em `public/images/placeholders/` ou atualize os caminhos `image` em cada projeto.

## Deploy na Vercel

1. Crie um repositório Git e faça push do projeto.
2. Acesse [vercel.com/new](https://vercel.com/new) e importe o repositório.
3. O Vercel detecta Next.js automaticamente — clique em **Deploy**.

Alternativa via CLI:

```bash
npx vercel
```

## Fase 2 (pós-revisão)

- Substituir placeholders por fotos e vídeos reais
- Vídeo de fundo no hero
- Links para YouTube/Vimeo nos projetos
- Domínio customizado
