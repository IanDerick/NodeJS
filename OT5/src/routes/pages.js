// src/routes/pages.js
// Rotas SSR: Home, About e integração com API externa.

const express = require('express');
const axios = require('axios');
const router = express.Router();

// Home (SSR)
router.get('/', (req, res) => {
  res.render('home', {
    title: 'SSR com Node.js',
    message: 'Bem-vindo ao SSR! (renderizado no servidor)',
  });
});

// Atividade Prática 1: rota /about com SSR e informações fictícias
router.get('/about', (req, res) => {
  res.render('about', {
    title: 'Sobre o Site',
    empresa: {
      nome: 'UniSenai Store',
      fundacao: 2021,
      descricao:
        'Um projeto fictício criado para fins didáticos, demonstrando o uso de ' +
        'Server-Side Rendering com Express e Handlebars.',
      missao: 'Ensinar conceitos de SSR, templating e integração com banco de dados.',
      equipe: [
        { nome: 'Ana Silva', cargo: 'Desenvolvedora Backend' },
        { nome: 'Bruno Costa', cargo: 'Desenvolvedor Frontend' },
        { nome: 'Carla Souza', cargo: 'Gerente de Produto' },
      ],
    },
  });
});

// Atividade Prática 3: integração com API externa (JSONPlaceholder)
router.get('/posts', async (req, res) => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: { _limit: 10 }, // limita a 10 posts para a listagem
    });

    res.render('posts', {
      title: 'Posts (API externa)',
      posts: data,
    });
  } catch (err) {
    res.status(500).render('posts', {
      title: 'Posts (API externa)',
      posts: [],
      error: 'Não foi possível carregar os dados da API externa: ' + err.message,
    });
  }
});

module.exports = router;
