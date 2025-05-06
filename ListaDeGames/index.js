const express = require('express');
const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor rodando!");
});

let games = [
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

app.get('/', (req, res) => {
    res.json(games);
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