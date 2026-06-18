const express = require('express');
require('dotenv').config();

const app = express();
const PORT = Number(process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor Express.js!');
});

app.get('/status', (req, res) => {
    res.json({ 
        ok: true, 
        timestamp: new Date().toISOString() });
});

app.post('/user', (req, res) => {
    res.res(201).json({ message: 'Usuário criado', payload: req.body });
});

app.put('/users/:id', (req, res) => {
    res.json({ message: `usuário ${req.params.id} atualizado`, payload: req.body});
});

app.delete('/users/:id', (req, res) =>{
    res.json({ message: `usuário ${req.params.id} excluído` });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    
});
