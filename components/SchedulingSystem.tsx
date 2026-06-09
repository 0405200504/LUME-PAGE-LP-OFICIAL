import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const cliente = [
  "Veja os serviços disponíveis",
  "Entenda valores ou faixas de preço",
  "Escolha o melhor horário",
  "Envie os dados básicos",
  "Confirme o agendamento",
  "Tenha uma experiência mais profissional",
];

const profissional = [
  "Organize a agenda",
  "Cadastre serviços",
  "Bloqueie horários",
  "Acompanhe agendamentos",
  "Consulte clientes",
  "Veja tarefas e rotina do negócio",
];

function MiniIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SchedulingSystem() {
  return (
    <section className="bg-offwhite py-20 sm:py-28">
      <div className="container-lume">
        <Reveal>
          <div className="max-w-3xl">
            <SectionLabel>Sistema de agendamento</SectionLabel>
            <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight text-grafite sm:text-4xl">
              Seu atendimento não precisa{" "}
              <span className="accent text-bordo">começar no WhatsApp.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-grafite/70 sm:text-lg">
              O WhatsApp deve ser usado para relacionamento, não para repetir
              manualmente as mesmas informações todos os dias.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-rose/50 bg-cream p-7 sm:p-9">
              <h3 className="font-sora text-lg font-semibold text-grafite">
                Para a sua cliente
              </h3>
              <p className="mt-1 text-sm text-grafite/55">
                Uma experiência sem fricção, do clique ao agendamento.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {cliente.map((c) => (
                  <li key={c} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-bordo/10 text-bordo">
                      <MiniIcon />
                    </span>
                    <span className="text-sm text-grafite/80">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grain h-full rounded-3xl bg-gradient-to-br from-bordo to-bordo-deep p-7 text-offwhite shadow-glow sm:p-9">
              <h3 className="font-sora text-lg font-semibold">
                Para você, profissional
              </h3>
              <p className="mt-1 text-sm text-rose">
                Controle da agenda e da rotina em um só lugar.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {profissional.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-offwhite/15 text-offwhite">
                      <MiniIcon />
                    </span>
                    <span className="text-sm text-offwhite/90">{p}</span>
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
