# Brief de construção — Portfólio WA.S

> Documento de especificação para implementação com Claude Code.
> Objetivo: construir o site do portfólio da WA.S (Wafunga Software) segundo o Brand Book v2 e a norma de arquitetura front-end da casa.

---

## 0. Antes de começar

**Lê primeiro estes documentos, se estiverem no repositório:**
- `WAS_BRAND_BOOK_V2.md` — identidade visual, cor, tipografia, voz
- `WAS_FRONTEND_ARCHITECTURE.md` — norma de arquitetura front-end

**Regra crítica de implementação:** constrói **uma feature de cada vez**, não o site inteiro numa passagem. Nenhum ficheiro pode ultrapassar 200 linhas. Se um componente estiver a crescer, extrai subcomponente ou hook antes de continuar. Não gerar ficheiros monolíticos é requisito, não preferência.

---

## 1. Stack

| Camada | Escolha | Nota |
|---|---|---|
| Framework | **Next.js 15** (App Router) | site estático com SEO forte; `output: 'export'` se for alojado como estático |
| Linguagem | **TypeScript** (strict) | sem `any` |
| Estilos | **Tailwind CSS** com tokens custom | tokens definidos em `tailwind.config.ts`, não valores hardcoded |
| Fontes | `next/font/google` | Unbounded, Manrope, JetBrains Mono |
| Animação | CSS puro | sem Framer Motion — o site tem uma única animação (secção 6) |
| Ícones | `lucide-react` | stroke 1.5px, nunca preenchidos |

Sem CMS, sem base de dados. O conteúdo vive em ficheiros TypeScript tipados (secção 5).

---

## 2. Estrutura de pastas

Segue Feature-Sliced Design, adaptado a um site estático:

```
src/
├── app/
│   ├── layout.tsx              (fontes, metadata, providers)
│   ├── page.tsx                (composição da homepage — só importa widgets)
│   └── globals.css             (tokens CSS, reset)
├── widgets/
│   ├── nav/
│   ├── hero/
│   ├── work-section/
│   ├── method-section/
│   ├── pricing-section/
│   ├── about-section/
│   └── site-footer/
├── entities/
│   ├── project/                (tipo Project + card)
│   └── service/                (tipo Service + linha de tabela)
└── shared/
    ├── ui/                     (Button, SectionLabel, Tag, SonaMark, SonaDivider)
    ├── content/                (dados: projects.ts, services.ts, site.ts)
    └── lib/                    (utils, cn helper)
```

`app/page.tsx` deve ter **menos de 40 linhas** — só compõe widgets em ordem. Se tiver mais, alguma coisa está no sítio errado.

Cada pasta de widget/entity tem um `index.ts` que exporta apenas o que é público.

---

## 3. Tokens de design

Define em `globals.css` e espelha em `tailwind.config.ts`:

```css
:root {
  --obsidian:     #14110D;
  --surface:      #1E1A14;
  --surface-2:    #262019;
  --brass:        #B8935A;
  --brass-bright: #D4AC78;
  --brass-dim:    rgba(184,147,90,0.14);
  --bone:         #EDE6D9;
  --stone:        #8C8477;
  --hair:         rgba(237,230,217,0.10);
}
```

**Acentos por projeto** (usados na barra lateral de 3px de cada card):

| Projeto | Hex |
|---|---|
| LD Fluxos | `#5B7C99` |
| Zela | `#1D9E75` |
| LACUNA | `#5C4A8C` |
| Vaquinha | `#E8A040` |
| Liga AO | `#C1502E` |
| EstudarHub | `#B8935A` |

**Regras de forma, sem exceções:**
- `border-radius: 2px` em tudo — cards, botões, inputs, tags
- Sem `box-shadow`, sem gradientes decorativos
- Separação por borda `--hair` ou mudança de superfície
- Espaçamento em múltiplos de 8px

---

## 4. Tipografia

| Papel | Fonte | Onde |
|---|---|---|
| Display | Unbounded 700/800/900 | h1, h2, h3, nome de projeto, números de destaque |
| Corpo | Manrope 400/500/600 | parágrafos, descrições, labels |
| Técnico | JetBrains Mono 400/500/600 | eyebrows, tags, preços, prazos, métricas, rodapé, links de navegação |

**Regra invariante:** todo o número que represente dinheiro, quantidade, prazo ou identificador vai em JetBrains Mono. Sem exceções.

---

## 5. Conteúdo (tipado)

### `shared/content/projects.ts`

```ts
export type ProjectCategory = 'client' | 'was';

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  kicker: string;        // ex: "ERP vertical · LD Fluxo Telecom"
  problem: string;       // UMA frase — o problema humano, não a tecnologia
  detail: string;        // 1-2 frases — o que o produto faz
  metric?: string;       // ex: "Em produção · ldfluxo.ao"
  accent: string;        // hex da tabela acima
  tags: string[];        // stack
}
```

Ordem obrigatória: **primeiro `client`, depois `was`.** Trabalho pago com clientes reais é a prova mais forte e abre a secção.

Conteúdo dos seis projetos:

1. **LD Fluxos** (`client`, `#5B7C99`) — ERP para operadora FTTH. Problema: uma operadora a gerir contratos, cobranças, rede e contabilidade em ficheiros separados. Detalhe: contratos e clientes, faturação com Multicaixa Express e Unitel Money, gestão de OLT/PON/CTO, cobranças por SMS e WhatsApp, contabilidade AGT, portal do cliente, app para técnicos. Métrica: `Em produção · ldfluxo.ao`. Tags: Spring Boot, TanStack Start, PostgreSQL, RBAC, VPS Linux.
2. **Zela** (`client`, `#1D9E75`) — SaaS de gestão para PMEs. Problema: pequenos negócios a controlar stock e vendas em cadernos. Detalhe: faturação, stock, clientes e dashboards, multi-tenant, desenhado para ligação instável e telemóvel. Métrica: `Piloto em curso · Benguela`. Tags: Multi-tenant, Spring Boot, React.
3. **LACUNA** (`was`, `#5C4A8C`) — carteira digital de documentos. Problema: uma vaga de bolsa perdida porque um documento não estava acessível a tempo. Detalhe: documentos académicos e oficiais autenticados, verificação pela instituição emissora, piloto no ISPB. Tags: Spring Boot, React Native, PostgreSQL RLS.
4. **Vaquinha** (`was`, `#E8A040`) — divisão de contas em grupo. Problema: dividir uma conta em grupo depende de confiança e de quem tem troco. Detalhe: assente no Multicaixa Express, nunca retém fundos — o dinheiro vai direto de quem paga para quem recebe. Tags: React Native, MCX.
5. **Liga AO** (`was`, `#C1502E`) — disponibilidade de combustível. Problema: horas perdidas em filas de postos que já não têm combustível. Detalhe: reportado e validado pela comunidade, em tempo real. Métrica: `340 postos verificados`. Tags: TanStack Start, Spring Boot.
6. **EstudarHub** (`was`, `#B8935A`) — plataforma académica. Problema: a produção científica angolana existe mas está dispersa. Detalhe: centraliza artigos das instituições de ensino superior, perfis de autor, pesquisa por área e instituição. Métrica: `Apresentado nas Jornadas Técnico-Científicas do ISPB`. Tags: React, OAuth2.

### `shared/content/services.ts`

```ts
export interface Service {
  name: string;
  description: string;
  timeline: string;
  priceFrom: string;   // string formatada, ex: "150.000 Kz"
}
```

| Serviço | Descrição | Prazo | A partir de |
|---|---|---|---|
| Site institucional | Presença online para negócios locais — loja, clínica, escritório. | 1–2 semanas | 150.000 Kz |
| Aplicação web / SaaS | Sistema com autenticação, base de dados e painel de gestão próprio. | 4–8 semanas | 600.000 Kz |
| Aplicação mobile | Android e iOS, ligada a um backend próprio, pensada para uso offline. | 6–10 semanas | 800.000 Kz |
| Sistema / ERP à medida | Plataforma multi-módulo — contratos, faturação, permissões, contabilidade. | 8–16 semanas | 1.500.000 Kz |
| Manutenção e evolução | Suporte contínuo, correções, novos módulos e alojamento gerido. | Mensal | 40.000 Kz/mês |

Nota sob a tabela: todos os projetos incluem alojamento configurado, domínio e documentação técnica; o orçamento é fechado após levantamento de escopo e não muda a meio do projeto.

---

## 6. Widgets — especificação

### `nav`
Sticky, `backdrop-filter: blur(10px)`, fundo `rgba(20,17,13,0.9)`, borda inferior `--hair`. Logomark sona (20px, stroke latão) + wordmark `WA.S` em Unbounded 900 com o ponto em latão. Links em JetBrains Mono 12.5px, cor `--stone`, hover `--brass-bright`. Links ocultos abaixo de 720px (sem menu hamburger — o site é uma página única com scroll).

### `hero`
- Eyebrow: `Wafunga Software · Benguela, Angola`, com traço de 18px em latão antes do texto
- H1: **"Software que resolve *problemas reais* de Angola."** — "problemas reais" em `--brass-bright`, `clamp(32px, 5.4vw, 54px)`, Unbounded 900, `line-height: 1.05`
- Lede: sistemas, plataformas e aplicações para negócios e instituições — construídos com arquitetura própria, do primeiro rascunho ao servidor em produção
- Dois botões: "Serviços e preços" (latão sólido) e "Ver trabalho" (fantasma com borda `--hair`)
- **Motivo sona animado** à direita: SVG traçado (nunca preenchido), `stroke-dasharray`/`stroke-dashoffset` a resolver em 2.4s com delay de 0.3s, uma única vez. Oculto abaixo de 820px. Respeitar `prefers-reduced-motion`.

Path canónico do sona (viewBox `0 0 200 200`, pontos da grelha em `--bone` r=3):
```
M 40 40 L 160 40 L 160 100 L 100 100 L 100 160 L 40 160 L 40 100 L 100 100 L 100 40
M 40 100 L 40 40
M 160 100 L 160 160 L 100 160
```
Pontos em: (40,40) (100,40) (160,40) (40,100) (100,100) (160,100) (40,160) (100,160) (160,160)

### `work-section`
Label `01 — Trabalho`. Título: "Cada produto começa num problema que já custou alguma coisa a alguém."
Dois grupos com sub-cabeçalho (JetBrains Mono, uppercase, latão claro, com linha `--hair` a preencher o resto da largura): **Trabalho de cliente** e **Produtos WA.S**.
Grelha de 2 colunas, 1 abaixo de 720px. Cada card: fundo `--surface`, barra de acento de 3px à esquerda em altura total, kicker → nome → problema (`--bone`) → detalhe (`--stone`) → métrica (latão claro, mono) → tags.

### `method-section`
Label `02 — Método`. Título: "Arquitetura definida antes da primeira linha de código."
Intro: a maior parte do software que falha em Angola não falha por falta de funcionalidades — falha porque ninguém consegue mantê-lo seis meses depois.
Três princípios em grelha (1 coluna abaixo de 760px), cada um com número em mono/latão e borda superior `--hair`:
1. **Arquitetura hexagonal no backend** — domínio isolado de infraestrutura; trocar base de dados, gateway de pagamento ou fornecedor de SMS não obriga a reescrever regras de negócio.
2. **Feature-Sliced Design no front-end** — camadas com dependência unidirecional e limites concretos por ficheiro; nenhum ecrã vira um ficheiro de duas mil linhas.
3. **Construído para o contexto real** — ligação instável, telemóvel como dispositivo principal, Multicaixa Express, conformidade AGT. Não é adaptação, é o ponto de partida.

### `pricing-section`
Label `03 — Serviços`. Título: "O que construímos, e o investimento envolvido."
**Tabela real, não cards.** Grelha `1.7fr 0.9fr 0.9fr`, cabeçalho em `--surface-2` (mono, uppercase), primeira coluna de cada linha em `--surface`, linhas separadas por borda `--hair`. Preços em JetBrains Mono, cor `--brass-bright`, weight 600.
Abaixo de 720px colapsa para uma coluna: o cabeçalho desaparece e cada célula ganha prefixo via `::before` (`Prazo · `, `A partir de · `).

### `about-section`
Label `04 — Sobre`. Título: "Um estúdio de engenharia com raiz angolana."
Dois parágrafos (origem da WA.S; a sona como base da identidade — linha contínua, precisão, repetição com significado) + coluna lateral de estatísticas com borda superior por item: `6` produtos construídos, `1` ERP em produção, `340` postos verificados · Liga AO, `Kz` pensado para Angola.

### `site-footer`
Divisor sona (linha `--hair` interrompida ao centro por um zigzag em latão) → nome/localização em mono `--stone` + link de email em latão claro com borda inferior. Texto do link: `Iniciar uma conversa →`.

---

## 7. Componentes partilhados (`shared/ui`)

- `SonaMark` — props: `size`, `showDots`, `animate`. Abaixo de 24px, `showDots` deve ser `false` (os pontos viram sujidade). Componente único usado em nav, hero e favicon.
- `SonaDivider` — divisor horizontal com o zigzag ao centro
- `SectionLabel` — `NN — Nome` em mono/uppercase
- `Button` — variantes `solid` (latão) e `ghost` (borda `--hair`)
- `Tag` — pílula de stack, mono 10px, borda `--hair`

---

## 8. Acessibilidade e qualidade

- Contraste mínimo AA: `--stone` sobre `--obsidian` passa para texto ≥14px — não usar abaixo disso
- `prefers-reduced-motion`: desativa a animação do sona
- Estados de foco visíveis: `outline: 1.5px solid var(--brass)` com `outline-offset: 1px` — nunca `outline: none`
- HTML semântico: `<nav>`, `<main>`, `<section>`, `<footer>`, hierarquia h1→h2→h3 sem saltos
- Metadata Open Graph com o logomark; `lang="pt"`
- Lighthouse alvo: 95+ em Performance e Accessibility

---

## 9. Pendentes de confirmação

Estes dois pontos precisam de decisão antes do deploy — perguntar em vez de assumir:

1. **Email de contacto** — o placeholder é `contacto@helderio.dev`. Domínios com acento (`heldério.dev`) causam problemas em clientes de email; confirmar o endereço real.
2. **Métrica "340 postos verificados"** — o Liga AO ainda não foi lançado publicamente. Se não for demonstrável a pedido, substituir por algo verificável.

---

## 10. Ordem de implementação

1. Setup: Next.js + TypeScript + Tailwind + fontes + tokens em `globals.css` e `tailwind.config.ts`
2. `shared/ui` — `SonaMark`, `Button`, `Tag`, `SectionLabel`, `SonaDivider`
3. `shared/content` — `projects.ts`, `services.ts`, `site.ts` com os tipos da secção 5
4. `entities/project` e `entities/service` — tipos e cards
5. Widgets, um de cada vez, pela ordem: `nav` → `hero` → `work-section` → `method-section` → `pricing-section` → `about-section` → `site-footer`
6. `app/page.tsx` — composição final (< 40 linhas)
7. Responsivo, acessibilidade, Lighthouse

Fazer commit ao fim de cada passo, não no fim de tudo.

---

*WA.S · Wafunga Software · brief de construção do portfólio v2*
