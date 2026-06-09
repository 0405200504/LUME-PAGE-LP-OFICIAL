import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const passos = [
  {
    n: "1",
    titulo: "Criamos sua página profissional",
    desc: "Com seus serviços, fotos, informações, localização, diferenciais, depoimentos e botão de agendamento.",
  },
  {
    n: "2",
    titulo: "Integramos seu sistema de agenda",
    desc: "Sua cliente escolhe o serviço, o dia e o horário sem precisar depender de conversa manual.",
  },
  {
    n: "3",
    titulo: "Você gerencia tudo em um painel simples",
    desc: "Agendamentos, clientes, tarefas, serviços e finanças em um só lugar.",
  },
  {
    n: "4",
    titulo: "Você coloca o link na bio e começa a usar",
    desc: "Sem precisar entender de tecnologia. Sem esperar semanas. Sem contratar agência cara.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-cream py-20 sm:py-28">
      <div className="container-lume">
        <Reveal>
          <div className="max-w-3xl">
            <SectionLabel>Simples de começar</SectionLabel>
            <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight text-grafite sm:text-4xl">
              Nós fazemos o trabalho técnico para você{" "}
              <span className="accent text-bordo">
                focar nos seus atendimentos.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-14">
          {/* linha horizontal conectando os passos (desktop) */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-rose via-bordo/40 to-rose lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {passos.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1}>
                <div className="relative">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-bordo/20 bg-offwhite font-sora text-xl font-semibold text-bordo shadow-soft">
                    {p.n}
                  </div>
                  <h3 className="mt-5 font-sora text-lg font-semibold text-grafite">
                    {p.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-grafite/65">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
