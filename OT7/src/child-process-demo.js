const { spawn } = require('child_process');
const os = require('os');
const logger = require('./logger');

function executarComando() {
  const comando = os.platform() === 'win32' ? 'dir' : 'ls';
  const args = os.platform() === 'win32' ? [] : ['-lh'];

  const processo = spawn(comando, args, { shell: os.platform() === 'win32' });

  processo.stdout.on('data', (data) => {
    logger.info(`Saída do child process: ${data.toString().trim()}`);
  });

  processo.stderr.on('data', (data) => {
    logger.error(`Erro do child process: ${data.toString().trim()}`);
  });

  processo.on('close', (code) => {
    logger.info(`Child process finalizado com código ${code}`);
  });
}

if (require.main === module) {
  executarComando();
}

module.exports = executarComando;
