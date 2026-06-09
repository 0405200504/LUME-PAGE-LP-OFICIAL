import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const dores = [
  {
    n: "01",
    text: "Mensagens perdidas no WhatsApp enquanto você está focada no atendimento.",
  },
  {
    n: "02",
    text: "Troca infinita de áudios apenas para tentar achar um horário livre.",
  },
  {
    n: "03",
    text: "Clientes desistindo de agendar porque você demorou a responder.",
  },
  {
    n: "04",
    text: "Responder dúvidas sobre preços e serviços repetidamente todo dia.",
  },
];

export default function PainSection() {
  return (
    <section id="dor" className="bg-offwhite py-20 sm:py-28">
      <div className="container-lume">
        <Reveal>
          <div className="max-w-3xl">
            <SectionLabel>O problema do WhatsApp</SectionLabel>
            <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight text-grafite sm:text-4xl">
              Responder mensagens enquanto atende é cansativo{" "}
              <span className="accent text-bordo">
                (e te faz perder clientes).
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-grafite/70 sm:text-lg">
              Você está no meio de um procedimento e o celular toca. A cliente quer saber o preço, 
              os horários livres e como chegar. Se você demora a responder, ela desiste. Se você 
              para o atendimento para responder, prejudica a cliente que está na maca.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {dores.map((d, i) => (
            <Reveal key={d.n} delay={i * 0.08}>
              <div className="group flex h-full gap-4 rounded-3xl border border-rose/50 bg-cream p-6 transition-all duration-300 hover:border-bordo/40 hover:shadow-card sm:p-7">
                <span className="font-cormorant text-3xl italic text-bordo/70">
                  {d.n}
                </span>
                <p className="text-base font-medium leading-relaxed text-grafite sm:text-lg">
                  {d.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-3xl bg-grafite px-7 py-10 text-center sm:px-12 sm:py-12">
            <p className="mx-auto max-w-3xl font-sora text-xl font-medium leading-snug text-offwhite sm:text-2xl">
              Na estética, a cliente não escolhe só a melhor profissional. Ela
              escolhe quem torna o processo de agendar{" "}
              <span className="accent text-rose">
                fácil, seguro e profissional.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
