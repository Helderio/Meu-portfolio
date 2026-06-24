import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Heldério Wafunga — Software Engineer & Builder" },
      {
        name: "description",
        content:
          "Heldério Simão Tchipalanga Wafunga — Full-stack developer em Benguela, Angola. Construindo produtos digitais para mercados africanos. Fundador da WA.S.",
      },
      { property: "og:title", content: "Heldério Wafunga — Software Engineer & Builder" },
      {
        property: "og:description",
        content:
          "Fullstack dev, Linux sysadmin, fundador da WA.S. Java, Spring Boot, React, React Native.",
      },
    ],
  }),
  component: Index,
});

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

const primarySkills = ["Java", "Spring Boot", "TypeScript", "React", "React Native", "PostgreSQL"];
const otherSkills = [
  "Expo",
  "Flyway",
  "Docker",
  "Linux",
  "Git",
  "REST API",
  "JWT / Auth",
  "Render",
  "Vercel",
  "PHP / Laravel",
  "Python",
  "TCP/IP",
];

const projects = [
  {
    featured: true,
    tag: "Fintech · Mobile · Angola",
    name: "Vaquinha",
    desc: (
      <>
        App móvel de divisão de despesas integrada com{" "}
        <strong className="text-[var(--text-main)] font-medium">Multicaixa Express (MCX)</strong>.
        Arquitectura de colector — a app nunca detém fundos. Desenhada para a economia informal
        angolana com UX calorosa em "warm obsidian".
      </>
    ),
    stack: ["React Native", "Expo", "TypeScript", "NativeWind", "Spring Boot 3", "PostgreSQL", "Hexagonal Arch"],
  },
  {
    tag: "Plataforma · Angola",
    name: "Liga AO",
    desc: "Disponibilidade de postos de combustível em tempo real. 340 estações reais via OpenStreetMap. Backend Spring Boot + frontend React/TanStack.",
    stack: ["Spring Boot", "PostgreSQL", "React", "JWT/RBAC"],
  },
  {
    tag: "Academic · ISPB",
    name: "Estudar Hub",
    desc: "Plataforma académica com 6 módulos: perfis, portfólio, equipas, eventos, chat e ranking. Apresentado nas Jornadas do ISPB.",
    stack: ["React", "Spring Boot", "OAuth2", "PostgreSQL"],
  },
  {
    tag: "SaaS · PME Angola",
    name: "Zela",
    desc: "SaaS de gestão para PMEs angolanas: facturação, stock, CRM e dashboards. Multi-tenant com discriminador empresa_id.",
    stack: ["Spring Boot", "Multi-tenancy", "PostgreSQL", "DM Sans"],
  },
  {
    tag: "Infra · Documentos",
    name: "LACUNA",
    desc: "Carteira digital de documentos autenticados para Angola. AES-256, rotação QR, webhooks HMAC-SHA256, multi-tenancy com RLS.",
    stack: ["Java 21", "Docker", "RLS", "AES-256"],
  },
];

const experience = [
  { period: "2023 — presente", role: "Fundador & Full-Stack Developer", org: "Heldério.dev / WA.S — Benguela" },
  { period: "2022 — 2023", role: "Full-Stack & Mobile Developer", org: "Zetabyte — Angola" },
  { period: "2021 — 2022", role: "Full-Stack Developer", org: "CandGest — Angola" },
  { period: "2020 — 2021", role: "Técnico de Informática", org: "Tchipalanga Lab — Angola" },
  { period: "2019", role: "Estágio em TI", org: "Administração Municipal de Moçâmedes — Namibe" },
];

function Index() {
  return (
    <div className="portfolio min-h-screen overflow-x-hidden bg-[var(--bg)] font-[var(--font-body)] text-[var(--text-main)]">
      <style>{`
        .portfolio a { cursor: pointer; }
        .pf-eyebrow::before { content: '>'; color: var(--teal); margin-right: .4rem; }
        .pf-section-label::before { content: '//'; margin-right: .4rem; }
        .pf-cursor { display:inline-block; width:7px; height:13px; background:var(--teal); animation: pfblink 1s step-end infinite; vertical-align:text-bottom; }
        @keyframes pfblink { 0%,100%{opacity:1} 50%{opacity:0} }
        .pf-card:hover { border-color: var(--teal); }
        .pf-card:hover .pf-arrow { color: var(--teal); transform: translate(2px,-2px); }
        .pf-skill:hover { border-color: var(--teal); color: var(--teal); }
        .pf-link:hover { border-color: var(--teal); color: var(--teal); }
        .pf-nav a:hover { color: var(--teal); }
        .pf-exp:hover { background: var(--surface2); }
      `}</style>

      <nav className="pf-nav sticky top-0 z-50 flex items-center justify-between border-b border-[var(--line)] bg-[rgba(10,10,10,0.95)] px-8 py-5 backdrop-blur">
        <div className="font-[var(--font-display)] text-[1.1rem] font-extrabold tracking-tight text-[var(--teal)]">
          heldério.dev
        </div>
        <div className="hidden gap-8 sm:flex">
          {[
            ["sobre", "about"],
            ["projectos", "projects"],
            ["experiência", "experience"],
            ["contacto", "contact"],
          ].map(([label, id]) => (
            <a
              key={id}
              onClick={() => scrollToId(id)}
              className="font-[var(--font-mono)] text-[0.72rem] uppercase tracking-[0.08em] text-[var(--text-muted)] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <header className="mx-auto max-w-[860px] px-8 pb-16 pt-20">
        <div className="pf-eyebrow mb-6 flex items-center font-[var(--font-mono)] text-[0.72rem] uppercase tracking-[0.14em] text-[var(--teal)]">
          Benguela, Angola — disponível para trabalho remoto
        </div>
        <h1 className="mb-4 font-[var(--font-display)] text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
          Software
          <br />
          Engineer
          <br />
          <span className="text-[var(--teal)]">&amp; Builder</span>
        </h1>
        <p className="mb-10 max-w-[560px] text-[1.05rem] font-light leading-[1.7] text-[var(--text-muted)]">
          Construo produtos digitais para{" "}
          <strong className="font-medium text-[var(--text-main)]">mercados africanos</strong>. Fullstack
          dev, Linux sysadmin, fundador da{" "}
          <strong className="font-medium text-[var(--text-main)]">WA.S</strong> — Wafunga Software.
        </p>

        <div className="mb-10 max-w-[560px] overflow-hidden rounded-[10px] border border-[var(--line)] bg-[var(--surface)]">
          <div className="flex items-center gap-2 border-b border-[var(--line)] bg-[var(--surface2)] px-4 py-[0.65rem]">
            <span className="h-[10px] w-[10px] rounded-full bg-[#FF5F57]" />
            <span className="h-[10px] w-[10px] rounded-full bg-[#FEBC2E]" />
            <span className="h-[10px] w-[10px] rounded-full bg-[#28C840]" />
            <span className="ml-auto font-[var(--font-mono)] text-[0.65rem] text-[var(--text-dim)]">
              helderio@dev ~ bash
            </span>
          </div>
          <div className="p-5 font-[var(--font-mono)] text-[0.78rem] leading-[1.9]">
            <div>
              <span className="text-[var(--teal)]">~</span>{" "}
              <span className="text-[var(--text-main)]">cat about.json</span>
            </div>
            <div className="text-[var(--text-muted)]">{"{"}</div>
            <div className="text-[var(--text-muted)]">
              &nbsp;&nbsp;<span className="text-[var(--teal)]">"name"</span>:{" "}
              <span className="text-[var(--text-main)]">"Heldério Simão Tchipalanga Wafunga"</span>,
            </div>
            <div className="text-[var(--text-muted)]">
              &nbsp;&nbsp;<span className="text-[var(--teal)]">"role"</span>:{" "}
              <span className="text-[var(--text-main)]">"Full-Stack Developer"</span>,
            </div>
            <div className="text-[var(--text-muted)]">
              &nbsp;&nbsp;<span className="text-[var(--teal)]">"location"</span>:{" "}
              <span className="text-[var(--text-main)]">"Benguela, Angola"</span>,
            </div>
            <div className="text-[var(--text-muted)]">
              &nbsp;&nbsp;<span className="text-[var(--teal)]">"stack"</span>:{" "}
              <span className="text-[var(--text-main)]">
                ["Java", "TypeScript", "React", "Spring Boot"]
              </span>
              ,
            </div>
            <div className="text-[var(--text-muted)]">
              &nbsp;&nbsp;<span className="text-[var(--teal)]">"building"</span>:{" "}
              <span className="text-[var(--text-main)]">"WA.S — Wafunga Software"</span>
            </div>
            <div className="text-[var(--text-muted)]">{"}"}</div>
            <div>
              <span className="text-[var(--teal)]">~</span> <span className="pf-cursor" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            onClick={() => scrollToId("projects")}
            className="rounded-md border border-[var(--teal)] bg-[var(--teal)] px-6 py-[0.7rem] font-[var(--font-mono)] text-[0.75rem] font-medium uppercase tracking-[0.06em] text-[#0A0A0A] transition-colors hover:bg-[var(--teal-mid)]"
          >
            Ver projectos
          </a>
          <a
            onClick={() => scrollToId("contact")}
            className="rounded-md border border-[var(--teal)] bg-transparent px-6 py-[0.7rem] font-[var(--font-mono)] text-[0.75rem] uppercase tracking-[0.06em] text-[var(--teal)] transition-colors hover:bg-[var(--teal)]/10"
          >
            Contactar
          </a>
        </div>
      </header>

      <hr className="mx-8 border-t border-[var(--line)]" />

      <section id="about" className="mx-auto max-w-[860px] px-8 py-16">
        <SectionHead label="sobre mim" title="Quem sou" />

        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {[
            {
              label: "Background",
              val: (
                <>
                  3.º ano de <Em>Engenharia Informática</Em> no ISPB Benguela. Experiência
                  profissional desde 2019 em dev, redes e suporte de TI.
                </>
              ),
            },
            {
              label: "Hoje",
              val: (
                <>
                  Fundador da <Em>Heldério.dev / WA.S</Em> — construindo produtos reais para o
                  mercado angolano e Lusófono.
                </>
              ),
            },
            {
              label: "Especialidades",
              val: (
                <>
                  Full-stack web &amp; mobile, sistemas Linux, arquitectura de APIs REST, bases de
                  dados PostgreSQL e <Em>soluções para mercados emergentes</Em>.
                </>
              ),
            },
            {
              label: "Idiomas",
              val: (
                <>
                  <Em>Português</Em> nativo · <Em>Inglês</Em> C1 profissional · <Em>Francês</Em>{" "}
                  básico
                </>
              ),
            },
          ].map((c) => (
            <div
              key={c.label}
              className="rounded-[10px] border border-[var(--line)] bg-[var(--surface)] p-6"
            >
              <div className="mb-2 font-[var(--font-mono)] text-[0.65rem] uppercase tracking-[0.1em] text-[var(--teal)]">
                {c.label}
              </div>
              <div className="text-[0.95rem] font-light leading-[1.6] text-[var(--text-main)]">
                {c.val}
              </div>
            </div>
          ))}
        </div>

        <div className="pf-section-label mb-4 flex items-center font-[var(--font-mono)] text-[0.68rem] uppercase tracking-[0.14em] text-[var(--teal)]">
          stack principal
        </div>
        <div className="flex flex-wrap gap-2">
          {primarySkills.map((s) => (
            <span
              key={s}
              className="pf-skill rounded border border-[var(--teal)] bg-[var(--teal)]/10 px-[0.85rem] py-[0.35rem] font-[var(--font-mono)] text-[0.72rem] text-[var(--teal)] transition-colors"
            >
              {s}
            </span>
          ))}
          {otherSkills.map((s) => (
            <span
              key={s}
              className="pf-skill rounded border border-[var(--line)] bg-[var(--surface)] px-[0.85rem] py-[0.35rem] font-[var(--font-mono)] text-[0.72rem] text-[var(--text-muted)] transition-colors"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      <hr className="mx-8 border-t border-[var(--line)]" />

      <section id="projects" className="mx-auto max-w-[860px] px-8 py-16">
        <SectionHead label="projectos" title="O que construí" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.name}
              className={`pf-card flex cursor-pointer flex-col gap-3 rounded-[10px] border border-[var(--line)] bg-[var(--surface)] p-6 transition-colors ${
                p.featured ? "sm:col-span-2 sm:grid sm:grid-cols-[1fr_auto] sm:gap-6" : ""
              }`}
            >
              <div className="flex flex-col gap-3">
                <div className="font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.1em] text-[var(--teal)]">
                  {p.tag}
                </div>
                <div className="font-[var(--font-display)] text-[1.2rem] font-extrabold tracking-tight text-white">
                  {p.name}
                </div>
                <p className="text-[0.88rem] font-light leading-[1.65] text-[var(--text-muted)]">
                  {p.desc}
                </p>
                <div className="mt-auto flex flex-wrap gap-[0.4rem] pt-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-[3px] border border-[var(--line)] bg-[var(--surface2)] px-[0.55rem] py-[0.2rem] font-[var(--font-mono)] text-[0.62rem] text-[var(--text-dim)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              {p.featured && (
                <div className="pf-arrow self-start text-[1.4rem] text-[var(--text-dim)] transition-all">
                  ↗
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <hr className="mx-8 border-t border-[var(--line)]" />

      <section id="experience" className="mx-auto max-w-[860px] px-8 py-16">
        <SectionHead label="experiência" title="Percurso" />
        <div className="overflow-hidden rounded-[10px] border border-[var(--line)]">
          {experience.map((e, i) => (
            <div
              key={e.period}
              className={`pf-exp flex items-start gap-6 bg-[var(--surface)] px-6 py-5 transition-colors ${
                i < experience.length - 1 ? "border-b border-[var(--line)]" : ""
              }`}
            >
              <div className="min-w-[80px] pt-[0.15rem] font-[var(--font-mono)] text-[0.65rem] whitespace-nowrap text-[var(--text-dim)]">
                {e.period}
              </div>
              <div>
                <div className="mb-1 text-[0.95rem] font-medium text-[var(--text-main)]">
                  {e.role}
                </div>
                <div className="font-[var(--font-mono)] text-[0.72rem] text-[var(--teal)]">
                  {e.org}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="mx-8 border-t border-[var(--line)]" />

      <section id="contact" className="mx-auto max-w-[860px] px-8 py-16">
        <SectionHead label="contacto" title="Vamos falar" />
        <div className="flex flex-col items-start gap-6 rounded-[10px] border border-[var(--line)] bg-[var(--surface)] p-10">
          <div className="font-[var(--font-display)] text-[1.6rem] font-extrabold leading-tight tracking-tight text-white">
            Disponível para projectos
            <br />
            &amp; oportunidades remotas
          </div>
          <p className="max-w-[480px] text-[0.85rem] font-light leading-[1.6] text-[var(--text-dim)]">
            Seja para uma colaboração, um projecto freelance, ou uma posição na tua equipa — entra
            em contacto. Respondo sempre em português ou inglês.
          </p>
          <div className="flex flex-wrap gap-3">
            {["✉ helderio@heldério.dev", "LinkedIn", "GitHub", "heldério.dev"].map((l) => (
              <a
                key={l}
                className="pf-link rounded-[5px] border border-[var(--line)] px-[1.1rem] py-[0.55rem] font-[var(--font-mono)] text-[0.72rem] uppercase tracking-[0.06em] text-[var(--text-muted)] transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-[900px] items-center justify-between border-t border-[var(--line)] px-8 py-6">
        <div className="font-[var(--font-mono)] text-[0.65rem] text-[var(--text-dim)]">
          © 2026 Heldério Simão Tchipalanga Wafunga
        </div>
        <div className="font-[var(--font-mono)] text-[0.65rem] text-[var(--text-dim)]">
          built with <span className="text-[var(--teal)]">♥</span> in Benguela
        </div>
      </footer>
    </div>
  );
}

function Em({ children }: { children: React.ReactNode }) {
  return <strong className="font-medium text-[var(--teal)]">{children}</strong>;
}

function SectionHead({ label, title }: { label: string; title: string }) {
  return (
    <>
      <div className="pf-section-label mb-3 flex items-center font-[var(--font-mono)] text-[0.68rem] uppercase tracking-[0.14em] text-[var(--teal)]">
        {label}
      </div>
      <h2 className="mb-3 font-[var(--font-display)] text-[2rem] font-extrabold tracking-[-0.03em] text-white">
        {title}
      </h2>
      <div className="mb-10 h-[2px] w-10 bg-[var(--teal)]" />
    </>
  );
}
