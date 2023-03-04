// Defina o número a ser verificado
let numero_verificar = 50;

// Defina os valores iniciais da sequência
let fibonacci = [0, 1];

// Gere a sequência de Fibonacci até o número a ser verificado
while (fibonacci[fibonacci.length - 1] < numero_verificar) {
  let prox_valor = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  fibonacci.push(prox_valor);
}

// Verifique se o número a ser verificado está na sequência
if (fibonacci.includes(numero_verificar)) {
  console.log(`${numero_verificar} pertence à sequência de Fibonacci: ${fibonacci}`);
} else {
  console.log(`${numero_verificar} não pertence à sequência de Fibonacci: ${fibonacci}`);
}
