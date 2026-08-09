
const express = require('express');

const app = express();

app.use(express.json());



app.get('/', (req, res) => {
    res.json({
        mensagem: "Meu servidor esta no ar!"
    });
});



app.get('/informacao', (req, res) => {

    const informacao = [
        { id: 1, nome: "lucas" },
        { id: 2, disciplina: "back-end" },
        { id: 3, ano: "2026" }
    ];

    res.json(informacao);
});



app.get('/produtos', (req, res) => {

    const produtos = [
        { id: 1, nome: "cama", preco: 120.00 },
        { id: 2, nome: "PC", preco: 1000.00 },
        { id: 3, nome: "garrafa", preco: 40.00 },
        { id: 4, nome: "mouse", preco: 80.00 }
    ];

    res.json(produtos);
});



app.get('/status', (req, res) => {

    res.status(200).json({
        online: true,
        mensagem: "servidor funcionando"
    });

});


// Produtos caros
app.get('/produtos/caros', (req, res) => {

    const produtos = [
        { id: 1, nome: "cama", preco: 120.00 },
        { id: 2, nome: "PC", preco: 1000.00 },
        { id: 3, nome: "garrafa", preco: 40.00 },
        { id: 4, nome: "mouse", preco: 80.00 }
    ];

    const caros = produtos.filter(produto => produto.preco > 100);

    res.json(caros);
});


// Iniciar servidor
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

