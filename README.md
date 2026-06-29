# Fintech

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)](./)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](#licença-e-autoria)

> Dashboard financeiro para acompanhar vendas, resumo consolidado e detalhes de cada venda com filtro por período, atalhos por mês e gráfico por status.

---

## Preview do Projeto

<img width="954" height="829" alt="image" src="https://github.com/user-attachments/assets/ad2a6635-40f5-4ffd-8967-f8d26cc99ee3" />

---

## Tecnologias Utilizadas

| Tecnologia | Uso no projeto |
|---|---|
| React | Construção da interface com componentes e hooks |
| TypeScript | Tipagem compartilhada e contratos de dados |
| Vite | Ambiente de desenvolvimento e build |
| React Router DOM | Rotas e navegação entre páginas |
| Recharts | Visualização do gráfico de vendas |
| Fetch API | Consumo da API de vendas |
| CSS Custom Properties | Tokens visuais e consistência de estilo |
| Media Queries | Adaptação da interface para telas menores |

---

## Testes

A suíte foi montada com [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) e [`@testing-library/jest-dom`](https://github.com/testing-library/jest-dom).

Os testes cobrem os componentes que têm comportamento relevante:

- [`src/Components/Loading.test.tsx`](src/Components/Loading.test.tsx)
- [`src/Components/DateInput.test.tsx`](src/Components/DateInput.test.tsx)
- [`src/Components/MesBtn.test.tsx`](src/Components/MesBtn.test.tsx)
- [`src/Components/Meses.test.tsx`](src/Components/Meses.test.tsx)
- [`src/Components/DataRange.test.tsx`](src/Components/DataRange.test.tsx)
- [`src/Components/VendaItem.test.tsx`](src/Components/VendaItem.test.tsx)
- [`src/Components/Sidenav.test.tsx`](src/Components/Sidenav.test.tsx)
- [`src/Components/Header.test.tsx`](src/Components/Header.test.tsx)
- [`src/Components/GraficoVendas.test.tsx`](src/Components/GraficoVendas.test.tsx)

Eles validam:

- estados iniciais e renderização principal
- interação com clique e input
- comportamento condicional
- agregação e transformação de dados no gráfico
- integração com router e contexto

---

## Como Rodar

### Desenvolvimento

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Testes

```bash
npm run test
```

Para executar a suíte uma única vez:

```bash
npm run test:run
```

### Preview da build

```bash
npm run preview
```

---

## Funcionalidades

- Resumo com total de vendas, recebido e processando.
- Lista de vendas com link para detalhe.
- Página de venda individual.
- Filtro por intervalo de datas.
- Atalhos por mês.
- Gráfico de vendas por status.
- Estados de carregamento durante a busca dos dados.

---

## Rotas do Projeto

| Rota | Descrição |
|---|---|
| `/` | Página de resumo com indicadores e gráfico. |
| `/vendas` | Lista de vendas carregadas pela API. |
| `/vendas/:id` | Detalhe de uma venda específica. |

As rotas estão definidas em [`src/App.tsx`](src/App.tsx) e usam [`BrowserRouter`](https://reactrouter.com/en/main/router-components/browser-router) com [`Routes`](https://reactrouter.com/en/main/components/routes).

---

## Estrutura do Projeto

```text
.
├── index.html
├── package.json
├── public/
├── src/
│   ├── Components/
│   ├── Contexts/
│   ├── Hooks/
│   ├── Pages/
│   ├── Types/
│   ├── Utils/
│   └── assets/
│       └── icons/
├── tsconfig.json
├── tsconfig.app.json
└── vite.config.ts
```

- [`public/`](public) guarda os arquivos estáticos servidos diretamente pelo Vite, como o favicon.
- [`src/Components/`](src/Components) concentra os componentes reutilizáveis da interface.
- [`src/Contexts/`](src/Contexts) concentra o contexto global de dados e o intervalo de datas.
- [`src/Hooks/`](src/Hooks) reúne hooks reutilizáveis, como o fetch genérico.
- [`src/Pages/`](src/Pages) contém as páginas roteadas.
- [`src/Types/`](src/Types) centraliza os tipos compartilhados.
- [`src/Utils/`](src/Utils) traz utilitários pequenos, como a formatação de data.
- [`src/assets/`](src/assets) armazena o SVG principal e os ícones usados na navegação.

---

## Licença e Autoria

Este projeto está sob a licença MIT.

**Autor:** ManoelReisDev

**Repositório:** [fintech](https://github.com/ManoelReisDev/fintech/)

---

> Feito para acompanhar vendas com uma interface simples, dados compartilhados e visualização clara.
