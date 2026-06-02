setTimeout(() => {
    console.log('1');    
}, 1000);

setTimeout(() => {
    console.log('2');    
}, 2000);

setTimeout(() => {
    console.log('3');    
}, 3000);

console.log('essa vem primeiro');

const axios = require('axios');
const chalk = require('chalk');

console.log(chalk.red('Erro: não foi possível conectar ao servidor.'));

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log('Dados recebidos');
        console.log(response.data);
    })
    .catch(error => {
        console.error('Erro na requisição', error.message)
    });


const ft = require('fs');

ft.readFile('texto.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Erro ao lero o arquivo'. err);
        return;
    } else {
        console.log('Conteudo:');
        console.log(data);
    }
})

function somar(a, b, callback) {
    const resultado = a + b;
    callback(resultado);
}

somar(10, 10, function(resultado){
    console.log("resultado da soma: ", resultado);
})

const fr = require('fs');

fr.readFile('usuario.json', 'utf-8', (err, data) => {
    if (err) {
        console.log('Erro ao ler o arquivo: ', err);
        return;
    }
    const usuario = JSON.parse(data);

    console.log('Nome:', usuario.nome);
    console.log('Idade:', usuario.idade);
    console.log('Email:', usuario.email);
    console.log('Cidade:', usuario.cidade);    
})

const agora = new Date();

console.log("Data e hora atuais: ", agora.toLocaleString('pt-BR'));
