const { parentPort, workerData } = require('worker_threads');

function calcularPrimos(limite) {
  const primos = [];
  for (let numero = 2; numero <= limite; numero++) {
    let ehPrimo = true;
    for (let i = 2; i * i <= numero; i++) {
      if (numero % i === 0) {
        ehPrimo = false;
        break;
      }
    }
    if (ehPrimo) primos.push(numero);
  }
  return primos;
}

const resultado = calcularPrimos(workerData?.limite || 100000);
parentPort.postMessage({ total: resultado.length, ultimos: resultado.slice(-5) });
