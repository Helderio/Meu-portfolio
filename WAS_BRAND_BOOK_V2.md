# WA.S · Brand Book v2

> **Este documento substitui integralmente a identidade anterior da WA.S** (teal `#00E5C3`, near-black `#0A0A0A`, Syne 800, DM Sans/DM Mono).
> A partir de agosto de 2026, toda a comunicação, produto e material da WA.S segue este sistema.

---

## 1. A tese

A identidade anterior era competente mas intercambiável — fundo quase-preto e acento teal são hoje o default de qualquer produto tech, incluindo os gerados por IA. Uma marca que se confunde com o default não é uma marca, é uma configuração.

A WA.S passa a assentar em algo que nenhum concorrente pode copiar sem soar falso: a **sona** (ou *lusona*), tradição de desenho geométrico Tchokwe de Angola — figuras traçadas numa linha contínua sobre uma grelha de pontos, sem levantar a mão, usadas historicamente para transmitir conhecimento.

Uma linha que não se quebra. Geometria com significado. Precisão como forma de respeito.

O nome mantém-se e ganha sentido acrescido: **WA.S** — jogo com o passado do verbo *to be*, orgulho local com ambição global. A sona é a prova visual de que a raiz é real, não decorativa.

---

## 2. Os três níveis de aplicação

O erro mais comum num sistema de identidade é aplicá-lo com a mesma intensidade em todo o lado. A WA.S opera em três níveis distintos:

| Nível | O que é | O que herda |
|---|---|---|
| **A — Marca corporativa** | Portfólio, redes sociais, propostas, apresentações, faturas WA.S | Tudo: obsidiana, latão, sona proeminente, Unbounded display |
| **B — Produtos WA.S** | Zela, Vaquinha, Liga AO, LACUNA, EstudarHub | Base fixa + um acento próprio por domínio. Sona contido. |
| **C — Trabalho de cliente** | TECNED / LD Fluxo, e futuros clientes | **Apenas o padrão de engenharia.** A marca do cliente domina. |

**Nível C é inegociável:** a marca do cliente é dele. O que a WA.S leva para um projeto de cliente é rigor de sistema — tokens semânticos, tipografia de dados, densidade de tabelas, arquitetura front-end, acessibilidade — não a nossa paleta nem o nosso motivo. No máximo, uma assinatura discreta em documentos exportados, e só com acordo do cliente.

---

## 3. Cor

```css
/* Base — fixa em níveis A e B */
--obsidian:     #14110D;  /* fundo */
--surface:      #1E1A14;  /* cards, painéis */
--surface-2:    #262019;  /* cabeçalhos, estados elevados */
--brass:        #B8935A;  /* assinatura */
--brass-bright: #D4AC78;  /* hover, ênfase */
--bone:         #EDE6D9;  /* texto primário */
--stone:        #8C8477;  /* texto secundário */
--hair:         rgba(237,230,217,0.10); /* bordas */

/* Semânticos — funcionais, nunca decorativos */
--success: #4E9E6B;
--warning: #C99A3E;
--danger:  #C1502E;
```

**Acentos por produto (nível B) — um só por produto, nunca dois:**

| Produto | Acento | Racional |
|---|---|---|
| Zela | `#1D9E75` verde contido | crescimento, gestão |
| Vaquinha | `#E8A040` âmbar | dinheiro em movimento, social |
| Liga AO | `#C1502E` brasa | urgência, combustível |
| LACUNA | `#5C4A8C` índigo | institucional, documento oficial |
| EstudarHub | `#B8935A` latão | académico — é o produto mais "WA.S puro" |

**Regra do latão:** o latão marca o que é acionável ou o que assina a marca. Nunca é cor de fundo, nunca é cor de estado, nunca preenche áreas grandes. Se está em todo o lado, deixa de significar.

---

## 4. Tipografia

| Papel | Fonte | Uso |
|---|---|---|
| Display | **Unbounded** 700/800/900 | títulos, wordmark, números de destaque |
| Corpo / UI | **Manrope** 400/500/600 | parágrafos, labels, botões, interface |
| Dados / técnico | **JetBrains Mono** 400/500 | valores monetários, IDs, datas, código, eyebrows, tabelas |

**A regra que sozinha cria consistência:** todo o número que representa dinheiro, quantidade, data ou identificador único vai em JetBrains Mono. Em qualquer produto, em qualquer ecrã.

O monospace não é estética — vem da forma como realmente trabalhamos (terminal, Arch, engenharia). É honesto, e por isso funciona.

---

## 5. O motivo sona

O sona é a assinatura. Aparece **traçado, nunca preenchido** — linha contínua, `stroke-linecap: round`, pontos da grelha em osso.

**Onde usar:**

| Nível A (corporativo) | Nível B (produto) |
|---|---|
| Hero do portfólio, animado a desenhar-se | Estado vazio (sem dados ainda) |
| Logomark e favicon | Loading de operações longas |
| Divisores entre secções | Rodapé de documentos exportados |
| Capas de propostas e apresentações | Ecrã de autenticação |

**Onde não usar:** como padrão de fundo repetido, como divisor dentro de dashboards densos, ou em qualquer sítio onde não marque uma transição real. Sona espalhado é ruído — perde exatamente o que o torna assinatura.

**Animação canónica:** `stroke-dasharray` + `stroke-dashoffset` a resolver em ~2.4s, easing suave, uma vez por sessão. Nunca em loop infinito exceto em loading state.

---

## 6. Forma e espaço

- **Raio de canto: 2px.** Em tudo — cards, botões, inputs, badges, avatares. Não há exceções. Isto é o que dá o carácter "tailoring" em vez de "app amigável".
- **Sem sombras suaves.** Separação faz-se por borda `--hair` ou por mudança de superfície.
- **Sem gradientes decorativos.** Gradiente só se representar dados (ex: escala de calor num gráfico).
- **Grelha de 8px** como unidade base de espaçamento.
- **Ícones em stroke de 1.5px**, nunca preenchidos.

---

## 7. Voz

A voz acompanha a forma: precisa, direta, sem inflação.

**Fazer**
- Descrever o problema real antes da solução ("uma vaga de bolsa perdida por um documento inacessível")
- Números concretos em vez de adjetivos ("340 postos verificados", não "cobertura abrangente")
- Português europeu, registo profissional mas não corporativo

**Evitar**
- Vocabulário de startup importado ("disruptivo", "revolucionário", "game-changer")
- Promessas sem prazo ou número
- Traduzir jargão inglês quando o termo português é mais claro

---

## 8. Plano de migração

Como o rebrand toca produtos já existentes, a ordem importa — nada disto deve bloquear entrega de projeto:

1. **Nível A primeiro** — portfólio, logo WA.S, redes sociais, template de proposta. É o que os clientes veem primeiro e o que não tem custo de refatoração.
2. **EstudarHub e LACUNA** — já estão desenhados no sistema, é só aplicar.
3. **Zela** — rebrand das sete variantes de logo e migração de tokens de DM Sans/teal para o sistema novo. Fazer **antes** do piloto na loja, para não rebrandear um produto que já tem utilizador real.
4. **Vaquinha e Liga AO** — quando voltarem a desenvolvimento ativo.
5. **TECNED** — não rebrandeia. Só herda o padrão de engenharia (ver nível C).

---

## 9. Documentos relacionados

- `WAS_FRONTEND_ARCHITECTURE.md` — norma de arquitetura front-end (Feature-Sliced Design + ports/adapters)
- `TECNED_DESIGN_GUIDELINES.md` — aplicação nível C, a rever segundo a secção 2 deste documento

---

*WA.S · Wafunga Software · Benguela, Angola · Brand Book v2 — agosto 2026*
