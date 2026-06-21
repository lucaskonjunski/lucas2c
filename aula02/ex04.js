function executarOperacao(a, b, operacao) {
   let resultado = operacao(a, b);
   console.log("Resultado da operação:", resultado);
}




executarOperacao(10, 5, (x, y) => x + y);


executarOperacao(10, 5, (x, y) => x - y);


executarOperacao(10, 5, (x, y) => x * y);

