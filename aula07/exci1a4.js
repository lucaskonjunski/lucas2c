
const express = require('express');
const app = express();

app.use(express.json());

let alunos = [
    { id: 1, nome: "Ana", nota: 8.5 },
    { id: 2, nome: "Bruno", nota: 7.0 }
];

let proximoId = 3;



app.get('/alunos/:id', (req, res) => {
    const id = Number(req.params.id);
    const aluno = alunos.find(a => a.id === id);

    if (!aluno) {
        return res.status(404).json({
            erro: "Aluno nao encontrado"
        });
    }

    res.json(aluno);
});



app.post('/alunos', (req, res) => {

    const erros = [];

    if (!req.body.nome) {
        erros.push("O campo nome é obrigatório.");
    }

    if (req.body.nota === undefined) {
        erros.push("O campo nota é obrigatório.");
    }

    if (req.body.nota !== undefined) {

        if (isNaN(req.body.nota)) {
            erros.push("A nota precisa ser um número.");
        }

        if (req.body.nota < 0 || req.body.nota > 10) {
            erros.push("A nota deve estar entre 0 e 10.");
        }
    }

    if (erros.length > 0) {
        return res.status(400).json({
            erros: erros
        });
    }

    const novoAluno = {
        id: proximoId,
        nome: req.body.nome,
        nota: req.body.nota
    };

    alunos.push(novoAluno);
    proximoId++;

    res.status(201).json(novoAluno);
});



app.put('/alunos/:id', (req, res) => {
    const id = Number(req.params.id);
    const aluno = alunos.find(a => a.id === id);

    if (!aluno) {
        return res.status(404).json({
            erro: "Aluno nao encontrado"
        });
    }

    aluno.nome = req.body.nome;
    aluno.nota = req.body.nota;

    res.json(aluno);
});


app.delete('/alunos/:id', (req, res) => {
    const id = Number(req.params.id);

    const aluno = alunos.find(a => a.id === id);

    if (!aluno) {
        return res.status(404).json({
            erro: "Aluno nao encontrado"
        });
    }

    alunos = alunos.filter(a => a.id !== id);

    res.json({
        mensagem: "Aluno removido com sucesso"
    });
});


app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});

