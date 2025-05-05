/*var fs = require ('fs');

fs.appendFile('novo.txt', 'Olá NodeJS! SENAI', function (err) {
    if (err) throw err;
    console.log('Arquivo Salvo!');
    
});
fs.writeFile('ArquivoNovoRenomeado.txt', 'Olá NodeJS! UNISENAI 2025', function (err) {
    if (err) throw err;
    console.log('Arquivo Salvo!');
});
fs.rename('novo.txt', 'ArquivoNovoRenomeado.txt', function (err) {
    if (err) throw err;
    console.log('Arquivo Salvo!');
});*/

const sh = require("superheroes");
console.log(sh.random());
