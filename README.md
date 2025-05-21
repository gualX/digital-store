# 🛍️ Digital Store

Uma loja virtual moderna desenvolvida com React + Vite, utilizando Tailwind CSS para estilização e boas práticas de desenvolvimento web, incluindo responsividade, componentes reutilizáveis e código limpo.

> Acesse o projeto publicado: [gualX.github.io/digital-store](https://gualX.github.io/digital-store)

---

## 🚀 Tecnologias Utilizadas

- **[React](https://reactjs.org/)** — Biblioteca JavaScript moderna para construção de interfaces reativas e performáticas.
- **[Vite](https://vitejs.dev/)** — Ferramenta de build rápida e moderna, ideal para projetos React.
- **[Tailwind CSS](https://tailwindcss.com/)** — Framework utilitário para estilização, altamente customizável e eficiente.
- **[React Router DOM](https://reactrouter.com/)** — Gerenciamento de rotas para páginas SPA.
- **[Material UI Icons](https://mui.com/material-ui/material-icons/)** — Conjunto de ícones modernos e acessíveis.
- **[Framer Motion](https://www.framer.com/motion/)** — Biblioteca de animações declarativas para React.

---

## 🎯 Por que React + Tailwind?

### ✅ React
- Permite **componentização**, facilitando a reutilização de blocos de código.
- Garante uma interface **reativa** e rápida com atualização eficiente do DOM.
- Tem uma comunidade ativa e vasto ecossistema de bibliotecas.

### ✅ Tailwind CSS
- Estilização **rápida** diretamente no HTML/JSX com classes utilitárias.
- **Responsividade nativa** via breakpoints móveis (`sm`, `md`, `lg`, etc.).
- Facilidade em manter um design **consistente** e customizável sem arquivos CSS grandes e difíceis de manter.

---

## 📦 Organização do Projeto

```
src/
├── assets/               # Imagens e arquivos estáticos
├── components/           # Componentes reutilizáveis (Header, Footer, ProductCard...)
├── pages/                # Páginas principais (HomePage, ProductListingPage...)
├── App.jsx               # Definição de rotas
├── main.jsx              # Ponto de entrada da aplicação
└── index.css             # Estilos globais (Tailwind)
```

---

## ✅ Boas Práticas Adotadas

- 🔁 **Componentização:** cada bloco funcional (produto, seção, galeria, filtros) é um componente reutilizável.
- 📱 **Responsividade:** todos os layouts são responsivos, otimizados para desktop e mobile.
- 🧹 **Código limpo:** semântica, indentação, nomes descritivos e organização clara por responsabilidade.
- ⚡ **Performance:** uso de Vite e código otimizado com uso de `useState`, `useEffect`, `map`, `filter` e outros recursos nativos do React.
- ♿ **Acessibilidade:** uso de `aria-label` e elementos semanticamente corretos.
- 🎨 **Design consistente:** Tailwind CSS garante espaçamentos, cores e tamanhos padronizados.
- 🚫 **Sem estado global desnecessário:** o gerenciamento de filtros e ordenação é feito de forma local e simples.
- 📁 **Deploy com GitHub Pages:** rota configurada para funcionar corretamente em produção.

---

## 🛠️ Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/gualX/digital-store.git

# 2. Acesse a pasta do projeto
cd digital-store

# 3. Instale as dependências
npm install

# 4. Rode o projeto localmente
npm run dev
```

---

## 🌐 Deploy no GitHub Pages

O projeto é publicado com o Vite + GitHub Pages. Para realizar o deploy:

```bash
# 1. Construa o projeto
npm run build

# 2. Faça o deploy (com vite-plugin-gh-pages ou manual via gh-pages)
npm run deploy
```

> Certifique-se de que `vite.config.js` esteja configurado corretamente com o campo `base: "/digital-store/"`.

---

## 🤝 Contribuição

Contribuições são bem-vindas! Abra uma *issue* ou envie um *pull request* com suas sugestões e melhorias.

---

## 📄 Licença

Este projeto está sob a licença MIT — veja o arquivo [LICENSE](LICENSE) para mais detalhes.
