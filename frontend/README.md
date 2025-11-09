# Quero Passagem (Front-end SPA)

Este projeto é o **front-end de uma aplicação Single Page Application (SPA)** desenvolvida em **Vue 3** com **Vite**, que reproduz e moderniza a interface da empresa [**Quero Passagem**](https://queropassagem.com.br).  
O objetivo é estudar e replicar a experiência do usuário, design e fluxo simplificado de compra de passagens, utilizando tecnologias modernas do ecossistema Vue.

---

## 🚀 Tecnologias e Bibliotecas

O projeto utiliza um conjunto de ferramentas e bibliotecas voltadas à produtividade, tipagem, testes e estilização:

### **Dependências Principais**
- **Vue 3** — Framework progressivo para interfaces reativas.
- **Vue Router** — Gerenciamento de rotas SPA.
- **Vuex** — Gerenciador de estado do Vue 3.
- **Bootstrap 5** — Componentes e grid responsivo.
- **Bulma** — Framework CSS moderno e flexível.
- **Bulma Calendar** — Componente de calendário para Bulma.
- **@iconscout/unicons** — Ícones vetoriais modernos.

### **Dependências de Desenvolvimento**
- **Vite** — Empacotador rápido e leve para Vue.
- **TypeScript** — Tipagem estática para JavaScript.
- **ESLint** e **Prettier** — Padronização e formatação de código.
- **Vitest** e **@vue/test-utils** — Testes unitários.
- **Vue TSC** — Verificação de tipos para Vue + TypeScript.
- **npm-run-all2** — Execução paralela e organizada de scripts.
- **Sass Embedded** — Compilador rápido para SCSS.

---

## 🧩 Estrutura e Arquitetura

O projeto segue uma estrutura modular inspirada em boas práticas do ecossistema Vue:

```
src/
 ├─ assets/          # Estilos, imagens e ícones
 ├─ components/      # Componentes reutilizáveis
 ├─ enums/           # Definição de enums para tipagem aprimorada
 ├─ interfaces/      # Definição de interfaces para tipagem aprimorada
 ├─ router/          # Configuração de rotas (vue-router)
 ├─ stores/          # Estados globais (Vuex)
 ├─ views/           # Páginas principais da aplicação
 ├─ App.vue          # Componente raiz
 └─ main.ts          # Ponto de entrada da aplicação
```

---

## ⚙️ Configuração do Ambiente

### **Pré-requisitos**
- Node.js **v20.19.0** ou superior (recomendado **>=22.12.0**)
- npm **v10+**

### **Instalação das dependências**

```bash
npm install
```

### **Rodar em modo de desenvolvimento**

```bash
npm run dev
```

> O servidor de desenvolvimento do Vite será iniciado (geralmente em `http://localhost:5173`).

### **Gerar build de produção**

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `/dist`.

### **Pré-visualizar o build localmente**

```bash
npm run preview
```

---

## 🧪 Testes e Qualidade de Código

### **Executar testes unitários**

```bash
npm run test:unit
```

### **Verificação de tipos TypeScript**

```bash
npm run type-check
```

### **Correção automática de lint e formatação**

```bash
npm run lint
npm run format
```

---

## 🌍 Executar em outro ambiente

Para rodar este projeto em outro ambiente (como outro computador, servidor ou container):

1. **Clone o repositório**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd quero-passagem
   ```

2. **Verifique a versão do Node.js**
   ```bash
   node -v
   ```
   Caso necessário, instale a versão recomendada via [nvm](https://github.com/nvm-sh/nvm).

3. **Instale as dependências**
   ```bash
   npm ci
   ```
   (ou `npm install` se preferir)

4. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

5. **(Opcional)** Para uso em container, configure o `Dockerfile` ou `docker-compose.yml` apontando para o comando de build e exposição da porta `5173`.

---

## 🧠 Autor e Objetivo

Este projeto foi criado com fins **educacionais e experimentais**, com o intuito de explorar o ecossistema Vue 3 e ferramentas modernas de front-end, simulando o comportamento e design do site **[Quero Passagem](https://queropassagem.com.br)**.

---

© 2025 — Desenvolvido com ❤️ e Vue 3.