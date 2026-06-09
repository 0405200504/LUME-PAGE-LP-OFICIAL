import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import Sparkle from "./Sparkle";

const etapas = [
  { label: "Instagram", icon: "instagram" },
  { label: "Link da bio", icon: "link" },
  { label: "Página profissional", icon: "page" },
  { label: "Escolha do serviço", icon: "service" },
  { label: "Escolha do horário", icon: "clock" },
  { label: "Agendamento confirmado", icon: "check" },
];

function StepIcon({ name }: { name: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "instagram":
      return (
        <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /></svg>
      );
    case "link":
      return (
        <svg {...common}><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1" /><path d="M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1" /></svg>
      );
    case "page":
      return (
        <svg {...common}><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h3" /></svg>
      );
    case "service":
      return (
        <svg {...common}><path d="M4 7h16M4 12h16M4 17h10" /></svg>
      );
    case "clock":
      return (
        <svg {...common}><circle cx="12" cy="12" r="8" /><path d="M12 8v4l2.5 2.5" /></svg>
      );
    default:
      return (
        <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M8.5 12l2.5 2.5L16 9" /></svg>
      );
  }
}

export default function ClientJourney() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="container-lume">
        <Reveal>
          <div className="max-w-3xl">
            <SectionLabel>A experiência da cliente</SectionLabel>
            <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight text-grafite sm:text-4xl">
              Veja o caminho que sua cliente{" "}
              <span className="accent text-bordo">deveria fazer.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-grafite/70 sm:text-lg">
              Sem ficar caçando informações no feed. Sem mandar mensagem
              esperando resposta. Sem desistir no meio do caminho.
            </p>
          </div>
        </Reveal>

        {/* fluxo */}
        <div className="mt-14 flex flex-col gap-3 lg:flex-row lg:items-stretch">
          {etapas.map((e, i) => (
            <Reveal key={e.label} delay={i * 0.07} className="flex-1">
              <div className="flex items-center gap-4 lg:flex-col lg:text-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-bordo/20 bg-offwhite text-bordo shadow-soft">
                  <StepIcon name={e.icon} />
                </div>
                <p className="text-sm font-medium text-grafite lg:mt-3">
                  {e.label}
                </p>
              </div>
              {/* seta entre etapas (mobile vertical / desktop horizontal escondida) */}
              {i < etapas.length - 1 && (
                <div className="ml-7 h-5 w-px bg-rose lg:hidden" />
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex items-center justify-center gap-4 rounded-3xl border border-bordo/15 bg-offwhite px-7 py-8 text-center sm:px-12">
            <Sparkle size={18} className="hidden shrink-0 text-bordo sm:block" />
            <p className="font-sora text-xl font-medium leading-snug text-grafite sm:text-2xl">
              Quanto menos esforço sua cliente precisa fazer,{" "}
              <span className="accent text-bordo">
                mais fácil fica dizer sim.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
