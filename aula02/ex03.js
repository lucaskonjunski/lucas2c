const prompt = require("prompt-sync")();


let num1 = Number(prompt("Digite o primeiro numero: "));
let num2 = Number(prompt("Digite o segundo numero: "));


const soma = (a, b) => a + b;
const subtra = (a, b) => a - b;
const multi = (a, b) => a * b;
const divi = (a, b) => a / b;




if (num2 === 0) {
   console.log("Erro: O segundo numero nao pode ser 0 para divisao.");
} else {
    console.log("Soma:", soma(num1, num2));
    console.log("Subtracao:", subtra(num1, num2));
   console.log("Multiplicacao:", multi(num1, num2));
   console.log("Divisao:", divi(num1, num2));
}
