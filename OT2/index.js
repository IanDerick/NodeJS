/*
1)
const http = require('http');
const servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bem-vindo ao Node.js!');
});

const PORTA = 3000;
servidor.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});

------------------------------------------------------------------------------
2)
const fs = require ('fs');

fs.writeFileSync('arquivo.txt', 'Teste');

const conteudo = fs.readFileSync('arquivo.txt', 'utf8')

console.log(conteudo);

------------------------------------------------------------------------------
3)
const fs = require('fs');

fs.writeFileSync('grandeArquivo.txt', 'TESTEGRANDE');

const stream = fs.createReadStream('grandeArquivo.txt', 'utf8');

stream.on('data', (chunk) => {
    console.log('Novo pedaço recebido:', chunk);
});

const conteudo = fs.readFileSync('grandeArquivo.txt', 'utf-8');
console.log(conteudo);

------------------------------------------------------------------------------
4)
const texto = "Olá, Node.js!";

const buffer = Buffer.from(texto, 'utf-8');
console.log(buffer);

console.log("\nDados binários:");
for (const byte of buffer) {
    console.log(byte.toString(2).padStart(8, '0'));
}

const textoRecuperado = buffer.toString('utf-8');

console.log("\nTexto recuperado:");
console.log(textoRecuperado);

------------------------------------------------------------------------------*/

function saudacao(nome) {
    return 'Olá, ${nome}!';
}

module.exports = saudacao;