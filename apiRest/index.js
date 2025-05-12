import express from 'express';
import { buscarUfs, buscarUfProId, buscarUfsPorNome } from './servicos/servicos.js';

const app = express();

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs();
    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({ "erro": "Nenhuma UF encontrada"});
    }
});

app.get('/ufs/:iduf', (req, res) =>{
    const uf = buscarUfProId(req.params.iduf);
    if (uf) {
        res.json(uf);
    }else if (isNaN(parseInt(req.params.iduf))) {
        res.status(400).send({ "erro": "Requsição inválida" });
    }else{
        res.status(400).send({ "erro": "UF nâo encontrada" });
    }
});

app.listen(8080, () =>{
    console.log('Servidor iniciado na porta 8080');
});