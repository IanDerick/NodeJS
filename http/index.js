import express from 'express';
const  app = express();
app.use(express.urlencoded({ extended: true }));

var carros = [
    {marca: "Ford", modelo: "Fiesta", preco: 45000},
    {marca: "VW", modelo: "Gol", preco: 43000},
    {marca: "Honda", modelo: "Civic", preco: 95000},
    {marca: "Toyota", modelo: "Corolla", preco: 100000},
    {marca: "Chevrolet", modelo: "Onix", preco: 70000},
    {marca: "Argo", modelo: "Fiat", preco: 68000},
];


app.get('/', (req, res) => 
    res.send("<h3>Rotas no Express</h3><p>Rota '/'")
);

app.post('/cars/novo', (req, res) => {
    let marca = req.body.marca;
    let modelo = req.body.modelo;
    let preco = req.body.preco;

    console.log(marca);
    console.log(modelo);
    console.log(preco);

    let novoCarro = {marca, modelo, preco};

    carros.push(novoCarro);

    res.send("OK");
});

app.get('/cars', (req, res) => {
    return res.json(carros)
});

app.put('/cars/update/:id', (req, res) => {
    const id = parseInt(req.params.id);
    carros[id] = req.body;
    return res.json(carros[id]);
});

app.delete('/cars/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const removido = carros.splice(id, 1);

    return res.json({ removido }); 
});

app.listen(3000, () => 
    console.log('Servidor iniciado na porta 3000')
);