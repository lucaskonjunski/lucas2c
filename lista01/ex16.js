const alunos = [
    {nome: "Lucas", nota: 8},
    {nome: "João", nota: 5},
    {nome: "Maria", nota: 9},
    {nome: "Ana", nota: 6},
    {nome: "Pedro", nota: 7}
]

const boletimCompleto = alunos.map(aluno => {
  let resultadoSituacao = "";
  
  if (aluno.nota >= 7) {
    resultadoSituacao = "Aprovado";
  } else {
    resultadoSituacao = "Reprovado";
  }
  return {
    nome: aluno.nome,
    nota: aluno.nota,
    situacao: resultadoSituacao
  };
}); 

console.log("Boletim com as situações:");
console.log(boletimCompleto);

const alunosAprovados = boletimCompleto.filter(aluno => aluno.situacao === "Aprovado");
console.log(`Quantidade de alunos aprovados: ${alunosAprovados.length}`);

let somaDasNotas = 0;

alunos.forEach(aluno => {
  somaDasNotas += aluno.nota;
});

const mediaGeral = somaDasNotas / alunos.length;
console.log(`Média geral da turma: ${mediaGeral.toFixed(1)}`);