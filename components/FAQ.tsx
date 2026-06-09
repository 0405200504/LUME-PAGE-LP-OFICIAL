"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const faqs = [
  {
    q: "A página fica pronta mesmo em 24 horas?",
    a: "Sim. Após o envio das informações necessárias, a Lume cria sua página com agendamento integrado em até 24 horas.",
  },
  {
    q: "Preciso saber mexer com tecnologia?",
    a: "Não. A estrutura é pensada para ser simples. Você recebe tudo pronto para usar.",
  },
  {
    q: "Funciona para qualquer área da estética?",
    a: "Sim. A página pode ser adaptada para manicure, lash, sobrancelha, estética facial, corporal, micropigmentação, clínica e outros serviços.",
  },
  {
    q: "Posso colocar meu link na bio do Instagram?",
    a: "Sim. A página foi feita justamente para transformar o link da bio em um caminho direto para o agendamento.",
  },
  {
    q: "A cliente agenda sem falar comigo?",
    a: "Sim. Ela consegue ver as informações, escolher serviço, dia e horário disponíveis.",
  },
  {
    q: "Eu consigo gerenciar meus agendamentos?",
    a: "Sim. Você terá acesso a um painel para acompanhar e organizar sua rotina.",
  },
  {
    q: "A página funciona no celular?",
    a: "Sim. A experiência é totalmente otimizada para mobile, já que a maioria das clientes vem do Instagram.",
  },
  {
    q: "Posso personalizar com minhas cores, fotos e serviços?",
    a: "Sim. A página é construída com base na identidade da profissional.",
  },
];

function Item({
  q,
  a,
  open,
  onClick,
}: {
  q: string;
  a: string;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-rose/50">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-sora text-base font-medium text-grafite sm:text-lg">
          {q}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            open
              ? "rotate-45 border-bordo bg-bordo text-offwhite"
              : "border-grafite/20 text-grafite"
          }`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-12 text-[15px] leading-relaxed text-grafite/70">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-offwhite py-20 sm:py-28">
      <div className="container-lume">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Perguntas frequentes</SectionLabel>
            <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight text-grafite sm:text-4xl">
              Ainda com uma{" "}
              <span className="accent text-bordo">dúvida?</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-3xl rounded-[2rem] border border-rose/50 bg-cream px-6 py-2 shadow-soft sm:px-9">
            {faqs.map((f, i) => (
              <Item
                key={f.q}
                q={f.q}
                a={f.a}
                open={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
