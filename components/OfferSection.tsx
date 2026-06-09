import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import Sparkle from "./Sparkle";
import Button from "./Button";

const entregaveis = [
  "Landing page personalizada",
  "Design alinhado ao seu posicionamento",
  "Estrutura de conversão para transformar visitas em agendamentos",
  "Sistema de agendamento integrado",
  "Painel de controle",
  "Organização de serviços",
  "Botões de contato",
  "Link para colocar na bio",
  "Página responsiva para celular",
  "Entrega em até 24 horas",
  "Suporte para ativação",
];

function Check() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function OfferSection() {
  return (
    <section className="bg-offwhite py-20 sm:py-28">
      <div className="container-lume">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Sua nova estrutura</SectionLabel>
            <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight text-grafite sm:text-4xl">
              Tudo que você precisa para profissionalizar{" "}
              <span className="accent text-bordo">seu agendamento.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-rose/50 bg-cream p-7 shadow-soft sm:p-10">
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {entregaveis.map((e) => (
                <li key={e} className="flex items-start gap-3 border-b border-rose/30 pb-4 last:border-0">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bordo text-offwhite">
                    <Check />
                  </span>
                  <span className="text-[15px] font-medium text-grafite">{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center gap-6 rounded-[2rem] bg-gradient-to-br from-bordo to-bordo-deep px-7 py-10 text-center text-offwhite shadow-glow sm:px-12">
            <Sparkle size={22} className="text-rose/70" />
            <p className="max-w-2xl font-sora text-xl font-medium leading-snug sm:text-2xl">
              Deixe o trabalho técnico com a gente e tenha sua página pronta para receber clientes{" "}
              <span className="accent text-rose">ainda amanhã.</span>
            </p>
            <Button className="bg-offwhite !text-bordo hover:bg-cream">
              Quero minha página em 24h
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
