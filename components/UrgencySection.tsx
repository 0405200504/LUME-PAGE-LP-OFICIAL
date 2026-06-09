import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import Button from "./Button";
import Sparkle from "./Sparkle";

export default function UrgencySection() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="container-lume">
        <Reveal>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-grafite/10 bg-offwhite px-7 py-12 text-center sm:px-14 sm:py-16">
            <Sparkle size={18} className="absolute left-8 top-8 text-rose" />
            <Sparkle size={14} className="absolute bottom-8 right-10 text-areia" />

            <SectionLabel>Enquanto você responde</SectionLabel>
            <h2 className="mt-4 font-sora text-2xl font-semibold leading-tight text-grafite sm:text-[2rem]">
              Enquanto você responde uma cliente, outras estão{" "}
              <span className="accent text-bordo">desistindo em silêncio.</span>
            </h2>

            <div className="mx-auto mt-6 max-w-xl space-y-3 text-base leading-relaxed text-grafite/70">
              <p>
                A pior parte de perder cliente por falta de estrutura é que você
                quase nunca percebe.
              </p>
              <p className="font-medium text-grafite">
                Ela não avisa. Ela não reclama. Ela só sai do seu perfil e agenda
                com outra pessoa.
              </p>
              <p>
                Cada dia sem uma página clara é mais um dia deixando o seu
                Instagram trabalhar pela metade.
              </p>
            </div>

            <div className="mt-9 flex justify-center">
              <Button>Quero minha página em 24h</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
