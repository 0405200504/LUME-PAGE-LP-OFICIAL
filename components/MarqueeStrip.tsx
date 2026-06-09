import Sparkle from "./Sparkle";

const phrases = [
  "Seu Instagram atrai. Sua estrutura precisa converter.",
  "Cliente confusa não agenda. Cliente segura, sim.",
  "O problema não é falta de interesse. É excesso de atrito.",
  "Organização também vende.",
  "Você não precisa de mais mensagens. Precisa de mais agendamentos.",
];

export default function MarqueeStrip() {
  const items = [...phrases, ...phrases];
  return (
    <div className="overflow-hidden border-y border-rose/40 bg-cream py-4">
      <div className="flex w-max animate-marquee gap-10">
        {items.map((p, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="whitespace-nowrap text-sm font-medium text-grafite/60">
              {p}
            </span>
            <Sparkle size={12} className="text-bordo/50" />
          </div>
        ))}
      </div>
    </div>
  );
}
