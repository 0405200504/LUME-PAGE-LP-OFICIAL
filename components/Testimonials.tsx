"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const testimonials = [
  { id: 1, src: "/depoimentos/1.png" },
  { id: 2, src: "/depoimentos/2.png" },
  { id: 3, src: "/depoimentos/3.png" },
  { id: 4, src: "/depoimentos/4.png" },
  { id: 5, src: "/depoimentos/5.png" },
  { id: 6, src: "/depoimentos/6.png" },
];

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 sm:py-28 overflow-hidden">
      <div className="container-lume">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>O que dizem sobre nós</SectionLabel>
            <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight text-grafite sm:text-4xl">
              Profissionais que já estão vivendo a{" "}
              <span className="accent text-bordo">experiência premium.</span>
            </h2>
            <p className="mt-5 text-grafite/70">
              Deslize para ver os resultados e o impacto que uma página profissional tem gerado para quem confiou na Lume.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 -mx-5 px-5 sm:-mx-8 sm:px-8">
          <Reveal delay={0.1}>
            <div className="flex w-full snap-x snap-mandatory gap-5 overflow-x-auto pb-8 pt-4 no-scrollbar">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="relative w-[280px] shrink-0 snap-center sm:w-[320px] shadow-card rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                >
                  <Image
                    src={t.src}
                    alt={`Depoimento ${t.id}`}
                    width={337}
                    height={600}
                    className="h-auto w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
