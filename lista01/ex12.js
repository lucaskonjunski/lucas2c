function calcular(numero1, numero2, operacao) {
  return operacao(numero1, numero2);
}

const somar = (numero1, numero2) => numero1 + numero2;

const subtrair = (numero1, numero2) => numero1 - numero2;

const multiplicar = (numero1, numero2) => numero1 * numero2;
console.log(calcular(10, 5, somar));
console.log(calcular(10, 5, multiplicar));
console.log(calcular(10, 5, subtrair));