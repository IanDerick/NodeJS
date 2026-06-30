const https = require('https');
const logger = require('./logger');

function httpGet(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (err) {
            reject(err);
          }
        });
      })
      .on('error', reject);
  });
}

async function buscarUsuario(id) {
  try {
    const usuario = await httpGet(`https://jsonplaceholder.typicode.com/users/${id}`);
    logger.info(`Usuário obtido da API: ${usuario.name}`);
    return usuario;
  } catch (err) {
    logger.error(`Erro ao buscar usuário: ${err.message}`);
    throw err;
  }
}

async function executar() {
  const usuario = await buscarUsuario(1);
  console.log(usuario);
}

if (require.main === module) {
  executar();
}

module.exports = { buscarUsuario, httpGet };
