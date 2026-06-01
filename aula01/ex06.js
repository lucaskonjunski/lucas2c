const secreto = 42;
let tentativas = 0;

while (true) {
    let palpite = Number(prompt("Tente adivinhar o número secreto (entre 1 e 100):"));
    tentativas++;
    
    if (palpite === secreto) {
        console.log(`Parabéns! Você acertou o número ${secreto} em ${tentativas} tentativa(s)!`);
        break;
    } else if (palpite < secreto) {
        console.log("o numero secreto é maior.tente novamente");
    } else {
        console.log("o numero secreto é menor.tente novamente");
    }
}