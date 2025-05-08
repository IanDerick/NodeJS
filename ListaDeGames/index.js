const express = require('express');
const app = express();
app.use(express.json());

const buscarGamesPorNome = (nomeGames) => {
    return games.filter(titulo => titulo.title.toLowerCase().includes(nomeGames.toLowerCase()));
}

const games = [
    {title: "Sea Of Thieves", studio: "Rare",  price: 30},
    {title: "WOW", studio: "Blizzard", price: 120},
    {title: "Valorant", studio: "Riot", price: 0},
    {title: "COD", studio: "Activision", price: 200},
    {title: "Minecraft", studio: "Mojang", price: 80},
    {title: "Halo", studio: "Microsoft", price: 90},
    {title: "GTA", studio: "Rockstar", price: 150},
    {title: "Red Dead Redamption", studio: "Rockstar", price: 200},
    {title: "Skate 3", studio: "EA", price: 80},
    {title: "Forza Horizon 5", studio: "Microsoft", price: 120},
];

app.get('/games', (req, res) => {
    const nomeGames = req.query.busca;
    const resultado = nomeGames ? buscarGamesPorNome(nomeGames) : games;
    if (resultado.length) {
        res.json(resultado);
    } else {
        res.status(404).send({ "erro": "Nenhum jogo encontrado"});
    }
});

app.post('/novogame', (req, res) => {
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);

    let newGame = {title, studio, price};

    games.push(newGame);

    res.send("OK");
});

app.put('/novogame/:index', (req, res) => {
    const {index} = req.params;
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    games[index] = {title, studio, price};

    return res.json(games);
});

app.delete('/:index', (req, res) => {
    const {index} = req.params;
    games.splice(index, 1);
    return res.json({ message: "O jogo foi deletado"});
});


app.listen(3000, () => {
    console.log("Servidor rodando!");
});