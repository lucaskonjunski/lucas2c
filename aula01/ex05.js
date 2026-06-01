const readline = require('readline');

let pares = 0;
let impares = 0;    

for (let i = 1; i <= 10; i++) {
    let numero = Number(readline.question(`Digite um numero ${i}: `));
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}
console.log("Quantidade de números pares: " + pares);
console.log("Quantidade de números ímpares: " + impares);