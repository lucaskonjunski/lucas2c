function podeVotar(idade) {
  return idade >= 16;
}

let idadeUsuario = parseInt(prompt("Digite sua idade:"));

if (podeVotar(idadeUsuario)) {
  console.log("Você já pode votar!");
} else {
  console.log("Você ainda não pode votar.");
}