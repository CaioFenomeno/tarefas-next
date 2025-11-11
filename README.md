# 📝 Tarefas Next

Aplicação simples de tarefas desenvolvida com Next.js 15 e TypeScript, usando App Router.  
Permite adicionar novas tarefas e mostra o número total de tarefas usando um hook customizado (`useContadorDeTarefas`).  
O projeto inclui testes unitários com Jest e React Testing Library.

![CI - Build & Test](https://github.com/CaioFenomeno/tarefas-next/actions/workflows/main.yml/badge.svg)
![CD - Deploy para Vercel](https://github.com/CaioFenomeno/tarefas-next/actions/workflows/deploy.yml/badge.svg)

---

## 🌐 Site publicado

Acesse o projeto em produção:  
👉 **[https://tarefas-next-caiofenomeno-caios-projects-bd430cdd.vercel.app](https://tarefas-next-caiofenomeno-caios-projects-bd430cdd.vercel.app)**

> O deploy é automatizado via GitHub Actions sempre que há push na branch `main`.

---

## 🚀 Como rodar o projeto

### 1️⃣ Instalar dependências
```bash
npm install
```

### 2️⃣ Rodar o servidor de desenvolvimento
```bash
npm run dev
```
Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

## 🧪 Testes

Os testes verificam:

- O comportamento do hook (`useContadorDeTarefas`)
- O funcionamento do componente (`NovaTarefa`)
- A renderização da página principal

### Rodar todos os testes:
```bash
npm test
```

### Rodar em modo observação:
```bash
npm run test:watch
```

### Gerar relatório de cobertura:
```bash
npm run test:coverage
```

---

## ⚙️ Scripts disponíveis

| Comando | Descrição |
|----------|------------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm start` | Inicia o servidor em modo produção |
| `npm test` | Executa os testes unitários |
| `npm run test:watch` | Executa testes observando mudanças |
| `npm run test:coverage` | Exibe relatório de cobertura dos testes |

---

## 📂 Estrutura do Projeto

```
app/
 ├── components/
 │    └── NovaTarefa.tsx          # Componente Client que adiciona tarefas
 ├── hooks/
 │    └── useContadorDeTarefas.ts # Hook customizado para contar tarefas
 ├── page.tsx                     # Server Component principal
 └── tarefasSimuladas.ts          # Simulação de dados
__tests__/
 ├── useContadorDeTarefas.test.ts
 ├── NovaTarefa.test.tsx
 └── page.test.tsx
```

---

## 🧠 Tecnologias utilizadas

- Next.js 15 (App Router)
- React 19
- TypeScript
- Jest
- React Testing Library

---

## ✅ Requisitos atendidos

✔ Estrutura de App Router com Server/Client Components  
✔ Hook customizado com TypeScript  
✔ Testes unitários do hook e da interface  
✔ Scripts configurados no package.json  
✔ Documentação completa de execução e testes  
✔ **Deploy automatizado no Vercel via GitHub Actions**

---

## 💡 Observação

Este projeto foi desenvolvido para fins de estudo e avaliação, com foco em boas práticas de componentização, hooks e testes unitários em aplicações React com Next.js.
