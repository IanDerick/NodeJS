# Módulo 5 — SSR, Templating e Interface com Servidor

Projeto Node.js + Express que cobre as **Atividades Práticas** propostas no
módulo, usando **Handlebars** como template engine (substituindo o EJS do
exemplo original) e **MySQL** via Docker.

## ✅ Atividades Práticas cobertas

1. **Rota `/about` com SSR** — `src/routes/pages.js`, view `views/about.handlebars`.
   Renderiza informações fictícias sobre a empresa/site (missão, equipe etc.).

2. **Handlebars no lugar do EJS** — todo o projeto usa `express-handlebars`
   (`src/server.js`), com layout principal (`views/layouts/main.handlebars`)
   e partials reutilizáveis (`views/partials/header.handlebars` e `footer.handlebars`).

3. **Integração com API externa (JSONPlaceholder)** — rota `/posts` em
   `src/routes/pages.js` consome `https://jsonplaceholder.typicode.com/posts`
   com `axios` e exibe os resultados em `views/posts.handlebars`.

Além disso, o projeto mantém o CRUD básico de usuários (listar + cadastrar)
integrado ao MySQL, como no material original (seção 5.4 e 5.6).

## 📂 Estrutura

```
├── src/
│   ├── server.js          # Configuração do Express + Handlebars
│   ├── db.js               # Pool de conexão MySQL
│   └── routes/
│       ├── pages.js        # Home, About, Posts (API externa)
│       └── usuarios.js     # CRUD de usuários (MySQL)
│
├── views/
│   ├── layouts/main.handlebars
│   ├── partials/header.handlebars, footer.handlebars
│   ├── home.handlebars
│   ├── about.handlebars
│   ├── posts.handlebars
│   ├── usuarios.handlebars
│   ├── usuario-form.handlebars
│   └── 404.handlebars
│
├── public/css/style.css
├── sql/schema.sql          # Cria tabela usuarios + dados de exemplo
├── docker-compose.yml      # Sobe o MySQL
├── .env.example
└── package.json
```

## ▶️ Como rodar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Copie o arquivo de variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```

3. Suba o MySQL via Docker (já roda o `sql/schema.sql` automaticamente):
   ```bash
   docker-compose up -d
   ```

4. Inicie o servidor:
   ```bash
   npm start
   # ou, para reiniciar automaticamente durante o desenvolvimento:
   npm run dev
   ```

5. Acesse no navegador:
   - `http://localhost:3000/` — Home (SSR)
   - `http://localhost:3000/about` — About (Atividade 1)
   - `http://localhost:3000/usuarios` — Listagem (MySQL)
   - `http://localhost:3000/usuarios/novo` — Formulário de cadastro
   - `http://localhost:3000/posts` — Posts via API externa (Atividade 3)

## 📝 Observação

Sem o MySQL rodando, as rotas `/about` e `/posts` funcionam normalmente
(não dependem do banco). Apenas `/usuarios` exigirá a conexão ativa.
