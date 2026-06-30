const { Worker } = require('worker_threads');
const path = require('path');
const logger = require('./logger');

function executarWorker(limite) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.join(__dirname, 'workers', 'primos.worker.js'), {
      workerData: { limite },
    });

    worker.on('message', (mensagem) => {
      logger.info(`Worker finalizou: ${JSON.stringify(mensagem)}`);
      resolve(mensagem);
    });

    worker.on('error', (err) => {
      logger.error(`Erro no worker: ${err.message}`);
      reject(err);
    });

    worker.on('exit', (code) => {
      if (code !== 0) {
        logger.error(`Worker finalizado com código de saída ${code}`);
      }
    });
  });
}

if (require.main === module) {
  executarWorker(200000).then((resultado) => console.log(resultado));
}

module.exports = executarWorker;
