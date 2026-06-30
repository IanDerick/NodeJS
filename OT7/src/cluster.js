const cluster = require('cluster');
const http = require('http');
const os = require('os');
const logger = require('./logger');

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  logger.info(`Processo mestre iniciado: ${process.pid}`);
  logger.info(`Iniciando ${numCPUs} workers`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code) => {
    logger.error(`Worker ${worker.process.pid} encerrado (código ${code}). Reiniciando...`);
    cluster.fork();
  });
} else {
  http
    .createServer((req, res) => {
      res.end(`Requisição atendida pelo worker ${process.pid}`);
    })
    .listen(8000, () => {
      logger.info(`Worker ${process.pid} ouvindo na porta 8000`);
    });
}
