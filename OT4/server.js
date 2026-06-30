const express = require('express');
require('dotenv').config();

const usuarioRoutes = require('./routes/userRoutes');

const app = express();
const PORT = Number(process.env.PORT || 3000);

app.use(express.json());

app.use('/usuarios', usuarioRoutes);

app.listen(PORT, () => {
    console.log(`✅ CRUD rodando na porta ${PORT}`);
});