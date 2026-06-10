const prompt = require("prompt-sync")();

let num1 = Number(prompt("Digite o primeiro numero: "));
let num2 = Number(prompt("Digite o segundo numero numero: "));

function somar (num1 ,num2){

 return num1 + num2;
}

function subtrair (num1 ,num2){

 return num1 - num2;
}

function multiplicar (num1 ,num2){

 return num1 * num2;
}
function dividir (num1 , num2){
    if (num1==0){
        return "Erro : seu numero n divide por 0"
    }
    return num1 / num2
}
console.log("Soma:", somar(num1, num2));
console.log("Subtracao:", subtrair(num1, num2));
console.log("Multiplicacao:", multiplicar(num1, num2));
console.log("Divisao:", dividir(num1, num2));





