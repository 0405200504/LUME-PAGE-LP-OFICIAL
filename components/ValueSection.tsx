import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import Sparkle from "./Sparkle";

const bullets = [
  "Seu trabalho parece mais premium",
  "Seus serviços ficam mais claros",
  "Sua cliente entende antes de perguntar",
  "Sua agenda fica mais organizada",
  "Sua marca transmite mais confiança",
  "Seu link da bio finalmente tem uma função real",
];

export default function ValueSection() {
  return (
    <section className="bg-offwhite py-20 sm:py-28">
      <div className="container-lume">
        <Reveal>
          <div className="max-w-3xl">
            <SectionLabel>Sua imagem digital</SectionLabel>
            <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight text-grafite sm:text-4xl">
              O primeiro contato da sua cliente precisa refletir a{" "}
              <span className="accent text-bordo">qualidade do seu serviço.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-grafite/70 sm:text-lg">
              Antes de sentar na sua cadeira ou deitar na sua maca, a cliente acessa seu link da bio. 
              Uma página bonita, organizada e fácil de usar passa segurança imediata e mostra o nível 
              do seu profissionalismo.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bullets.map((b, i) => (
            <Reveal key={b} delay={i * 0.06}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-rose/50 bg-cream p-5">
                <Sparkle size={16} className="mt-0.5 shrink-0 text-bordo" />
                <span className="text-[15px] font-medium text-grafite">{b}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-3xl bg-grafite px-7 py-10 text-center sm:px-12">
            <p className="mx-auto max-w-3xl font-sora text-xl font-medium leading-snug text-offwhite sm:text-2xl">
              Seu trabalho já é incrível. Agora é hora de ter um agendamento que seja{" "}
              <span className="accent text-rose">
                tão premium quanto ele.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
