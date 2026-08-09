export type ProjectCategory = "client" | "was";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  /** ex: "ERP vertical · LD Fluxo Telecom" */
  kicker: string;
  /** UMA frase — o problema humano, não a tecnologia. */
  problem: string;
  /** 1-2 frases — o que o produto faz. */
  detail: string;
  metric?: string;
  /** hex do acento do produto */
  accent: string;
  tags: string[];
}

// Ordem obrigatória: primeiro `client`, depois `was`.
export const projects: Project[] = [
  {
    slug: "ld-fluxos",
    name: "LD Fluxos",
    category: "client",
    kicker: "ERP vertical · LD Fluxo Telecom",
    problem:
      "Uma operadora a gerir contratos, cobranças, rede e contabilidade em ficheiros separados.",
    detail:
      "Contratos e clientes, faturação com Multicaixa Express e Unitel Money, gestão de OLT/PON/CTO, cobranças por SMS e WhatsApp, contabilidade AGT, portal do cliente, app para técnicos.",
    metric: "Em produção · ldfluxo.ao",
    accent: "#5B7C99",
    tags: ["Spring Boot", "TanStack Start", "PostgreSQL", "RBAC", "VPS Linux"],
  },
  {
    slug: "zela",
    name: "Zela",
    category: "client",
    kicker: "SaaS de gestão · PMEs Angola",
    problem: "Pequenos negócios a controlar stock e vendas em cadernos.",
    detail:
      "Faturação, stock, clientes e dashboards, multi-tenant, desenhado para ligação instável e telemóvel.",
    metric: "Piloto em curso · Benguela",
    accent: "#1D9E75",
    tags: ["Multi-tenant", "Spring Boot", "React"],
  },
  {
    slug: "lacuna",
    name: "LACUNA",
    category: "was",
    kicker: "Carteira digital · Documentos autenticados",
    problem: "Uma vaga de bolsa perdida porque um documento não estava acessível a tempo.",
    detail:
      "Documentos académicos e oficiais autenticados, verificação pela instituição emissora, piloto no ISPB.",
    accent: "#5C4A8C",
    tags: ["Spring Boot", "React Native", "PostgreSQL RLS"],
  },
  {
    slug: "vaquinha",
    name: "Vaquinha",
    category: "was",
    kicker: "Fintech social · Divisão de contas",
    problem: "Dividir uma conta em grupo depende de confiança e de quem tem troco.",
    detail:
      "Assente no Multicaixa Express, nunca retém fundos — o dinheiro vai direto de quem paga para quem recebe.",
    accent: "#E8A040",
    tags: ["React Native", "MCX"],
  },
  {
    slug: "liga-ao",
    name: "Liga AO",
    category: "was",
    kicker: "Plataforma comunitária · Disponibilidade de combustível",
    problem: "Horas perdidas em filas de postos que já não têm combustível.",
    detail: "Reportado e validado pela comunidade, em tempo real.",
    metric: "340 postos verificados",
    accent: "#C1502E",
    tags: ["TanStack Start", "Spring Boot"],
  },
  {
    slug: "estudarhub",
    name: "EstudarHub",
    category: "was",
    kicker: "Plataforma académica · Produção científica angolana",
    problem: "A produção científica angolana existe mas está dispersa.",
    detail:
      "Centraliza artigos das instituições de ensino superior, perfis de autor, pesquisa por área e instituição.",
    metric: "Apresentado nas Jornadas Técnico-Científicas do ISPB",
    accent: "#B8935A",
    tags: ["React", "OAuth2"],
  },
];
