# Lume — Landing Page

Landing page premium de alta conversão para a **Lume**, que cria páginas profissionais com agendamento integrado em até 24h para profissionais da estética.

Construída com **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** e **Framer Motion**.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Para build de produção:

```bash
npm run build && npm run start
```

## O que editar primeiro

### 1. Link do WhatsApp (todos os CTAs)
Tudo fica em [`lib/site.ts`](lib/site.ts). Troque o número e, se quiser, a mensagem padrão:

```ts
export const WHATSAPP_NUMBER = "5500000000000"; // 55 + DDD + número, só dígitos
const WHATSAPP_MESSAGE = "Oi, quero minha página da Lume em 24h";
```

Os links de Instagram e Política de Privacidade também ficam ali (`SITE`).

### 2. Cores da marca
Definidas em [`tailwind.config.ts`](tailwind.config.ts) (`theme.extend.colors`):

| Token         | Hex       | Uso                       |
| ------------- | --------- | ------------------------- |
| `bordo`       | `#7B102B` | Cor principal / CTAs      |
| `offwhite`    | `#F4EFE7` | Fundo base                |
| `cream`       | `#FBF8F3` | Fundo alternado de seções |
| `grafite`     | `#2C2527` | Texto / contraste escuro  |
| `rose`        | `#D8C9C3` | Bordas finas / detalhes   |
| `areia`       | `#B89E95` | Texto auxiliar            |

### 3. Tipografia
Carregada via `next/font/google` em [`app/layout.tsx`](app/layout.tsx):
- **Títulos:** Sora SemiBold
- **Corpo:** Inter
- **Destaques:** Cormorant Garamond Italic (classe utilitária `.accent`)

### 4. Textos das seções
Cada seção é um componente isolado em [`components/`](components/). Os textos
ficam em arrays no topo de cada arquivo — fácil de editar sem mexer no layout.

## Estrutura

```
app/
  layout.tsx          # fontes, metadata/SEO, html base
  page.tsx            # ordem das seções
  globals.css         # tokens, botões, utilitários
components/
  Navbar.tsx          ClientJourney.tsx     OfferSection.tsx
  Hero.tsx            SchedulingSystem.tsx   UrgencySection.tsx
  MarqueeStrip.tsx    DashboardSection.tsx   FAQ.tsx
  PainSection.tsx     ValueSection.tsx       FinalCTA.tsx
  HowItWorks.tsx      ForWho.tsx             Footer.tsx
  Comparison.tsx      StickyCTA.tsx          (CTA fixo mobile)
  Button.tsx  SectionLabel.tsx  Logo.tsx  Sparkle.tsx  Reveal.tsx
  MockupLanding.tsx   MockupDashboard.tsx    (mockups em CSS/SVG)
lib/
  site.ts             # WhatsApp + links (ponto único de edição)
```

## Notas de design
- **Mobile-first** — o público vem do Instagram; há um CTA fixo no rodapé do mobile.
- CTAs para WhatsApp repetidos estrategicamente (hero, oferta, urgência, CTA final, navbar, sticky).
- Mockups (página da cliente e painel) são 100% CSS/SVG — sem imagens de banco genéricas.
- Animações discretas via Framer Motion, respeitando o tom premium.
- Sem azul, sem verde, paleta restrita à identidade da marca.
