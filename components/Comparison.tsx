import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import Sparkle from "./Sparkle";

const antes = [
  "Link da bio sem utilidade real",
  "Mensagens perdidas no WhatsApp",
  "Você repete os preços todo dia",
  "Agenda espalhada no caderno ou app",
  "Aparência de quem está começando",
  "Clientes desistem por demora",
  "Interrupções durante o atendimento",
  "Dificuldade para organizar horários",
];

const depois = [
  "Página profissional como sua vitrine",
  "Cliente escolhe e agenda sozinha",
  "Preços e serviços claros em um só lugar",
  "Agenda sempre atualizada",
  "Imagem premium desde o primeiro clique",
  "Fim das dúvidas repetitivas",
  "Mais foco total no seu atendimento",
  "Controle total sobre o seu tempo",
];

function Cross() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Comparison() {
  return (
    <section className="bg-offwhite py-20 sm:py-28">
      <div className="container-lume">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>A diferença na prática</SectionLabel>
            <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight text-grafite sm:text-4xl">
              Do atendimento manual para uma{" "}
              <span className="accent text-bordo">experiência premium.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* ANTES */}
          <Reveal>
            <div className="h-full rounded-3xl border border-grafite/10 bg-cream p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-grafite/50">
                Você trabalhando de forma manual
              </p>
              <ul className="mt-6 space-y-3.5">
                {antes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-grafite/10 text-grafite/50">
                      <Cross />
                    </span>
                    <span className="text-[15px] text-grafite/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* DEPOIS */}
          <Reveal delay={0.1}>
            <div className="grain relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-bordo to-bordo-deep p-7 text-offwhite shadow-glow sm:p-9">
              <Sparkle size={20} className="absolute right-7 top-7 text-rose/60" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose">
                Sua página trabalhando por você
              </p>
              <ul className="mt-6 space-y-3.5">
                {depois.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-offwhite/15 text-offwhite">
                      <Check />
                    </span>
                    <span className="text-[15px] text-offwhite/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
