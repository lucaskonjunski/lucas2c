const readline = require('readline-sync');
const numero = parseInt(readline.question("Digite sua idade: "));


const listaalunos  = []


for (let i = 1 ;i <= 5 ;  i++) {
 nomeDigitado = readline.question("Digite o nome do aluno: ");

 
let notaDigitada = parseFloat(readline.question("Digite a nota do aluno: "));


 listaalunos.push({ id: i, nome: nomeDigitado, nota: notaDigitada });
}
const alunosComSituacao = listaalunos.map(aluno => {
   let situacaoaluno = (aluno.nota >= 6)? "aprovado" : "reprovado";
   return {
 nome: aluno.nome,
 nota: aluno.nota,
 situacao: situacaoaluno
    };


});
console.log(alunosComSituacao);

