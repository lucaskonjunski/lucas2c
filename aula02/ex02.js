const prompt = require("prompt-sync")();


function validarSenha(senha) {
 return senha.length >= 8;
}


let senhaDigitada = prompt("Digite sua senha: ");
if (validarSenha(senhaDigitada)) {
   console.log("Senha valida");
} else {
   console.log("Senha fraca minimo 8 caracteres");
}
const prompt = require("prompt-sync")();


function validarSenha(senha) {
 return senha.length >= 8;
}


let senhaDigitada = prompt("Digite sua senha: ");
if (validarSenha(senhaDigitada)) {
   console.log("Senha valida");
} else {
   console.log("Senha fraca minimo 8 caracteres");
}
