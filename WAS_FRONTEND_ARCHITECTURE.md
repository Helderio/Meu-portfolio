# WA.S · Arquitetura de Front-end

> Padrão aplicável a todos os produtos WA.S (web em React/Vite/Next, mobile em React Native/Expo).
> Objetivo: o mesmo problema que a arquitetura hexagonal resolve no backend — separar regras de negócio de detalhes de implementação — aplicado ao front-end. Nenhum ficheiro de 2000 linhas volta a acontecer porque a estrutura não permite.

---

## 1. O paralelo com o backend

No backend, hexagonal separa **domínio** de **infraestrutura** através de portas e adaptadores. No front-end o problema é o mesmo, só que a tentação de misturar tudo é maior porque UI, estado e chamadas de API vivem fisicamente perto.

| Hexagonal (backend) | Equivalente no front-end |
|---|---|
| Domínio / casos de uso | `entities/` + `features/` (lógica em hooks) |
| Porta (interface) | Contrato de serviço em `shared/api/ports` |
| Adaptador (implementação) | Cliente HTTP concreto em `shared/api/adapters` |
| Camada de aplicação | `pages/` + `widgets/` (composição) |
| Infraestrutura externa | `app/` (providers, config, roteamento) |

A regra central é a mesma dos dois lados: **a lógica de negócio nunca depende diretamente de uma biblioteca externa concreta — depende de uma interface, e a implementação é injetada.**

---

## 2. Camadas (Feature-Sliced Design)

```
src/
├── app/          → providers, roteamento, configuração global, entry point
├── pages/         → composição de ecrã (uma pasta por rota/ecrã)
├── widgets/        → blocos compostos reutilizáveis (ex: "Cabeçalho do Dashboard")
├── features/         → uma funcionalidade acionável pelo utilizador (ex: "criar-fatura")
├── entities/          → modelos de domínio partilhados (ex: "cliente", "contrato")
└── shared/             → UI kit, utils, tipos, cliente de API (ports + adapters)
```

**Regra de dependência (unidirecional, de cima para baixo):**

`app → pages → widgets → features → entities → shared`

Uma camada só pode importar de si mesma ou de camadas abaixo — nunca de cima, nunca lateralmente sem passar pelo `index.ts` público da pasta. Isto por si só evita 90% do acoplamento que gera ficheiros gigantes.

---

## 3. Estrutura dentro de uma feature

Cada `feature/` é uma pasta autocontida — nunca um ficheiro solto:

```
features/criar-fatura/
├── ui/
│   ├── CriarFaturaForm.tsx      (componente, só JSX + composição)
│   └── CriarFaturaForm.styles.ts
├── model/
│   ├── useCriarFatura.ts        (hook — toda a lógica vive aqui)
│   └── schema.ts                (validação, ex: zod)
├── api/
│   └── criarFatura.service.ts   (chama o port, não o axios diretamente)
└── index.ts                     (única porta de entrada pública da feature)
```

**Regra prática:** um componente `.tsx` só tem JSX e chamadas a hooks. Se há `useState`, `useEffect`, lógica condicional complexa ou transformação de dados a acontecer diretamente dentro do componente, isso é sinal de que devia estar num hook em `model/`.

---

## 4. Ports & Adapters no front-end

```
shared/api/
├── ports/
│   └── ClienteRepository.ts     (interface — o "contrato")
├── adapters/
│   └── ClienteRepository.http.ts (implementação concreta com axios/fetch)
└── client.ts                     (instância base do cliente HTTP)
```

```ts
// ports/ClienteRepository.ts
export interface ClienteRepository {
  listar(): Promise<Cliente[]>;
  criar(dados: NovoCliente): Promise<Cliente>;
}

// adapters/ClienteRepository.http.ts
export class ClienteRepositoryHttp implements ClienteRepository {
  async listar() { return api.get('/clientes').then(r => r.data); }
  async criar(dados: NovoCliente) { return api.post('/clientes', dados).then(r => r.data); }
}
```

Features dependem sempre da interface (`ClienteRepository`), nunca do `ClienteRepositoryHttp` diretamente. Isto significa: trocar REST por GraphQL, ou mockar em testes, não toca em nenhuma linha de UI.

---

## 5. Regras de clean code (limites concretos, não sugestões vagas)

| Regra | Limite |
|---|---|
| Linhas por componente `.tsx` | 150–200 linhas — acima disso, extrair subcomponente ou hook |
| Lógica de negócio dentro de componente | Zero — vive sempre em `model/use*.ts` |
| Chamada de API dentro de componente | Zero — vai sempre por `api/*.service.ts` → port |
| Exports por ficheiro | Um único export default por componente |
| Props de um componente | Máx. 6–7 — acima disso, provavelmente devia ser dois componentes |
| Estado global (Zustand/Context) | Só o que é realmente partilhado entre features — o resto é `useState` local |

**Nomenclatura**
- Componentes: `PascalCase.tsx`
- Hooks: `useAlgumaCoisa.ts`
- Pastas: `kebab-case`
- Um `index.ts` por feature/widget que reexporta só o que é público — o resto é privado à pasta

---

## 6. O que teria acontecido ao ficheiro de 2000 linhas

Um gerador de código sem esta estrutura tende a colocar UI + estado + chamadas de API + validação no mesmo lugar porque não tem onde mais pôr. Com esta arquitetura, esse mesmo ecrã dividir-se-ia naturalmente em:

- `pages/faturacao/FaturacaoPage.tsx` (~40 linhas, só composição)
- `widgets/tabela-faturas/` (~120 linhas)
- `features/criar-fatura/` (~150 linhas divididas em ui/model/api)
- `features/marcar-paga/` (~60 linhas)
- `entities/fatura/` (tipos e regras de domínio partilhadas, ~50 linhas)

Nenhum ficheiro isolado ultrapassa 200 linhas porque a estrutura força a divisão — não depende de disciplina manual nem de lembrar de refatorizar depois.

---

## 7. Diferença web vs mobile

A estrutura é idêntica; só `pages/` vira `screens/` em React Native/Expo, e o roteamento em `app/` usa Expo Router em vez de React Router/Next. `entities/`, `features/` e `shared/api` (incluindo os ports) podem, em teoria, ser partilhados entre web e mobile num monorepo, já que não têm nada de específico de plataforma.

---

## 8. Ao usar geração de código (Antigravity, Copilot, Claude, etc.)

Cola sempre este documento como contexto **antes** de pedir para gerar um ecrã, e pede explicitamente por feature isolada (ex: "gera só a feature `criar-fatura` seguindo esta estrutura"), nunca "gera o ecrã inteiro" — isso é o que produz o ficheiro monolítico.

---

*WA.S · Padrão de Arquitetura de Front-end v1*
