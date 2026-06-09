import Button from "./Button";
import Sparkle from "./Sparkle";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="bg-offwhite pb-20 pt-4 sm:pb-28">
      <div className="container-lume">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-bordo to-bordo-deep px-7 py-16 text-center text-offwhite shadow-glow sm:px-14 sm:py-20">
            {/* decorações */}
            <Sparkle size={26} className="absolute left-10 top-12 text-rose/50 animate-sparkle-pulse" />
            <Sparkle size={18} className="absolute bottom-14 right-14 text-rose/40" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-offwhite/10 blur-3xl" />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose">
              Pronta para começar
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl font-sora text-3xl font-semibold leading-tight sm:text-[2.6rem]">
              Sua agenda mais inteligente e profissional{" "}
              <span className="accent text-rose">começa aqui.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-offwhite/80 sm:text-lg">
              Fale com nossa equipe e tenha sua página no ar amanhã. Mais organização para você, mais facilidade para sua cliente.
            </p>

            <div className="mt-9 flex justify-center">
              <Button className="bg-offwhite !text-bordo hover:bg-cream">
                Quero minha página em 24h
              </Button>
            </div>

            <p className="mt-4 text-sm text-offwhite/65">
              Clique no botão e fale com a Lume pelo WhatsApp.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
