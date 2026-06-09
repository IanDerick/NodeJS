/*
const saudacao = require('./saudacao');
console.log(saudacao('Ian'));

--------------------------------------------------------------------
6)

const fs = require('fs');

fs.readFile('dados.json', 'utf-8', (err, data) =>{
    if(err){
        console.error('Erro ao ler o arquivo: ', err);
        return;
    }
    const dados = JSON.parse(data);

    console.log('Nome: ', dados.Nome);
    console.log('idade: ', dados.Idade);
    console.log('Curso: ', dados.Curso);
    
})
-------------------------------------------------------------


const fs = require('fs');

try {
    const conteudo = fs.readFileSync('arquivo_inexistente.txt', 'utf8');
    console.log(conteudo);
} catch (erro) {
    console.error('Erro ao ler o arquivo:', erro.message);
}

-------------------------------------------------------------

const { Duplex } = require('stream');

class MeuDuplex extends Duplex {
    _write(chunk, encoding, callback) {
        this.dado = chunk.toString().toUpperCase();
        callback();
    }

    _read(size) {
        this.push(this.dado);
        this.push(null);
    }
}

const stream = new MeuDuplex();

stream.write('olá node.js');

stream.on('data', (chunk) => {
    console.log(chunk.toString());
});

-------------------------------------------------------------

const http = require('http');

const servidor = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Página Inicial');
    }

    else if (req.url === '/sobre') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Página Sobre');
    }

    else if (req.url === '/contato') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Página Contato');
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página não encontrada');
    }
});

servidor.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});

-------------------------------------------------------------
*/
function dividir(a, b) {
    debugger;
    return a / b;
}

const resultado = dividir(10, 0);
console.log(resultado);