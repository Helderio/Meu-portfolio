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
