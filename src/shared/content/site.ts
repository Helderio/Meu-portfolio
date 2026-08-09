export const site = {
  studioName: "Wafunga Software",
  location: "Benguela, Angola",
  contactEmail: "helderiowafungadev@outlook.com",
};

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Trabalho", href: "#trabalho" },
  { label: "Método", href: "#metodo" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
];

export const hero = {
  eyebrow: "Wafunga Software · Benguela, Angola",
  headlinePrefix: "Software que resolve ",
  headlineEmphasis: "problemas reais",
  headlineSuffix: " de Angola.",
  lede: "Sistemas, plataformas e aplicações para negócios e instituições — construídos com arquitetura própria, do primeiro rascunho ao servidor em produção.",
  ctaPrimary: { label: "Serviços e preços", href: "#servicos" },
  ctaSecondary: { label: "Ver trabalho", href: "#trabalho" },
};

export interface MethodPrinciple {
  number: string;
  title: string;
  body: string;
}

export const methodIntro =
  "A maior parte do software que falha em Angola não falha por falta de funcionalidades — falha porque ninguém consegue mantê-lo seis meses depois.";

export const methodPrinciples: MethodPrinciple[] = [
  {
    number: "01",
    title: "Arquitetura hexagonal no backend",
    body: "Domínio isolado de infraestrutura; trocar base de dados, gateway de pagamento ou fornecedor de SMS não obriga a reescrever regras de negócio.",
  },
  {
    number: "02",
    title: "Feature-Sliced Design no front-end",
    body: "Camadas com dependência unidirecional e limites concretos por ficheiro; nenhum ecrã vira um ficheiro de duas mil linhas.",
  },
  {
    number: "03",
    title: "Construído para o contexto real",
    body: "Ligação instável, telemóvel como dispositivo principal, Multicaixa Express, conformidade AGT. Não é adaptação, é o ponto de partida.",
  },
];

export interface AboutStat {
  value: string;
  label: string;
}

export const aboutParagraphs: string[] = [
  "A WA.S nasce em Benguela como um estúdio de engenharia, não uma agência — o trabalho começa sempre no problema real de um negócio ou instituição angolana, antes de qualquer linha de código.",
  "A sona é a base da identidade: uma linha contínua, traçada sem levantar a mão, geometria Tchokwe com significado. Precisão e repetição — o mesmo rigor que rege a arquitetura de cada sistema que construímos.",
];

export const aboutStats: AboutStat[] = [
  { value: "6", label: "produtos construídos" },
  { value: "1", label: "ERP em produção" },
  { value: "340", label: "postos verificados · Liga AO" },
  { value: "Kz", label: "pensado para Angola" },
];

export const footerContent = {
  linkLabel: "Iniciar uma conversa →",
};
