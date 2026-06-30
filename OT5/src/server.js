// src/server.js
// Arquivo principal do servidor Express.
// Atividade Prática 2: usa Handlebars como template engine no lugar do EJS.

require('dotenv').config();
const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');

const pagesRoutes = require('./routes/pages');
const usuariosRoutes = require('./routes/usuarios');

const app = express();
const PORT = process.env.PORT || 3000;

// --- Views / templating (Handlebars) ---
app.engine(
  'handlebars',
  engine({
    defaultLayout: 'main', // layout padrão (views/layouts/main.handlebars)
    helpers: {
      // helper simples para comparações dentro do template, ex.: {{#if (eq a b)}}
      eq: (a, b) => a === b,
    },
  })
);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '..', 'views'));

// --- Arquivos estáticos (CSS, etc.) ---
app.use('/static', express.static(path.join(__dirname, '..', 'public')));

// --- Body parsing (substitui body-parser) ---
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// --- Rotas ---
app.use('/', pagesRoutes);
app.use('/usuarios', usuariosRoutes);

// --- 404 ---
app.use((req, res) => {
  res.status(404).render('404', { title: 'Página não encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
