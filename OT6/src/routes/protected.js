const express = require('express');
const csurf = require('csurf');
const router = express.Router();
const authenticate = require('../middlewares/authenticate');
const authorize = require('../middlewares/authorize');

const csrfProtection = csurf();

router.get('/admin', authenticate, authorize('admin'), (req, res) => {
  res.json({ message: `Bem-vindo, ${req.user.nome}! Acesso de admin liberado.` });
});

router.get('/perfil', authenticate, (req, res) => {
  res.json({ id: req.user.id, nome: req.user.nome, role: req.user.role });
});

router.get('/form', csrfProtection, (req, res) => {
  res.render('form', { csrfToken: req.csrfToken() });
});

router.post('/form', csrfProtection, (req, res) => {
  res.json({ message: 'Formulário recebido com sucesso', dados: req.body });
});

router.use((err, req, res, next) => {
  if (err.code === 'EBADCSRFTOKEN') {
    return res.status(403).json({ error: 'Token CSRF inválido' });
  }
  next(err);
});

module.exports = router;
