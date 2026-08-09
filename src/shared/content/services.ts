import type { Service } from "@/entities/service";

export const services: Service[] = [
  {
    name: "Site institucional",
    description: "Presença online para negócios locais — loja, clínica, escritório.",
    timeline: "1–2 semanas",
    priceFrom: "150.000 Kz",
  },
  {
    name: "Aplicação web / SaaS",
    description: "Sistema com autenticação, base de dados e painel de gestão próprio.",
    timeline: "4–8 semanas",
    priceFrom: "600.000 Kz",
  },
  {
    name: "Aplicação mobile",
    description: "Android e iOS, ligada a um backend próprio, pensada para uso offline.",
    timeline: "6–10 semanas",
    priceFrom: "800.000 Kz",
  },
  {
    name: "Sistema / ERP à medida",
    description: "Plataforma multi-módulo — contratos, faturação, permissões, contabilidade.",
    timeline: "8–16 semanas",
    priceFrom: "1.500.000 Kz",
  },
  {
    name: "Manutenção e evolução",
    description: "Suporte contínuo, correções, novos módulos e alojamento gerido.",
    timeline: "Mensal",
    priceFrom: "40.000 Kz/mês",
  },
];

export const pricingNote =
  "Todos os projetos incluem alojamento configurado, domínio e documentação técnica; o orçamento é fechado após levantamento de escopo e não muda a meio do projeto.";
