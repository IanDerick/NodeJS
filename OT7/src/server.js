const path = require('path');
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const logger = require('./logger');
const executarWorker = require('./worker-demo');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, '..', 'public')));

io.on('connection', (socket) => {
  logger.info(`Usuário conectado: ${socket.id}`);

  socket.on('mensagem', (msg) => {
    logger.info(`Mensagem recebida de ${socket.id}: ${msg}`);
    io.emit('mensagem', { id: socket.id, texto: msg });
  });

  socket.on('tarefa-pesada', async (limite) => {
    logger.info(`Disparando worker thread para ${socket.id}`);
    try {
      const resultado = await executarWorker(limite || 100000);
      socket.emit('tarefa-concluida', resultado);
    } catch (err) {
      socket.emit('tarefa-erro', err.message);
    }
  });

  socket.on('disconnect', () => {
    logger.info(`Usuário desconectado: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  logger.info(`Servidor rodando em http://localhost:${PORT}`);
});
