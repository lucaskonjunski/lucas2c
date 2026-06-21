const readline = require('readline-sync');
const numero = parseInt(readline.question("Digite um numero: "));
for (let i = numero; i >= 1; i--) {
 console.log(i);
}


console.log("fim");
