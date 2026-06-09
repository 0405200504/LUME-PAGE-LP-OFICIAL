import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import MockupDashboard from "./MockupDashboard";

const recursos = [
  { titulo: "Agenda", desc: "Todos os horários e agendamentos em um só lugar." },
  { titulo: "Clientes", desc: "Histórico e dados de quem agenda com você." },
  { titulo: "Serviços", desc: "Cadastre, organize e atualize quando quiser." },
  { titulo: "Tarefas", desc: "O que precisa ser feito no seu dia." },
  { titulo: "Resultados", desc: "Acompanhe o movimento do seu negócio." },
  { titulo: "Finanças", desc: "Uma visão clara da sua receita." },
  { titulo: "Configurações", desc: "Tudo do seu jeito, sem complicação." },
];

export default function DashboardSection() {
  return (
    <section id="painel" className="bg-cream py-20 sm:py-28">
      <div className="container-lume grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div>
            <SectionLabel>Painel de controle</SectionLabel>
            <h2 className="mt-4 font-sora text-3xl font-semibold leading-tight text-grafite sm:text-4xl">
              Uma central simples para enxergar sua empresa com{" "}
              <span className="accent text-bordo">mais clareza.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-grafite/70">
              Porque uma profissional que quer crescer não pode depender de
              agenda no papel, mensagens perdidas e prints no WhatsApp.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {recursos.map((r) => (
                <div
                  key={r.titulo}
                  className="rounded-2xl border border-rose/50 bg-offwhite px-4 py-3.5"
                >
                  <p className="font-sora text-sm font-semibold text-grafite">
                    {r.titulo}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-grafite/60">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative flex justify-center">
            <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-rose/30 blur-3xl" />
            <div className="relative animate-float-slow">
              <MockupDashboard />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
