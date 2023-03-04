// Importando os dados do arquivo JSON
const dadosFaturamento = require('../faturamento/faturamento.json');

// Variáveis para armazenar o menor e maior valor de faturamento
let menorValor = Number.MAX_VALUE;
let maiorValor = Number.MIN_VALUE;

// Variáveis para armazenar a soma e quantidade de valores de faturamento
let somaValores = 0;
let qtdValores = 0;

// Loop pelos valores de faturamento
for (let i = 0; i < dadosFaturamento.length; i++) {
  const valor = dadosFaturamento[i].valor;

  // Verifica se o valor é maior que zero para considerá-lo na média
  if (valor > 0) {
    somaValores += valor;
    qtdValores++;
  }

  // Atualiza as variáveis de menor e maior valor
  if (valor < menorValor) {
    menorValor = valor;
  }
  if (valor > maiorValor) {
    maiorValor = valor;
  }
}

// Calcula a média de faturamento diário
const media = somaValores / qtdValores;

// Variável para armazenar a quantidade de dias com faturamento superior à média
let qtdDiasAcimaDaMedia = 0;

// Loop pelos valores de faturamento novamente para contar os dias acima da média
for (let i = 0; i < dadosFaturamento.length; i++) {
  const valor = dadosFaturamento[i].valor;

  // Verifica se o valor é maior que a média para incrementar a variável de contagem
  if (valor > media) {
    qtdDiasAcimaDaMedia++;
  }
}

// Imprime os resultados
console.log('Menor valor de faturamento: R$' + menorValor.toFixed(2));
console.log('Maior valor de faturamento: R$' + maiorValor.toFixed(2));
console.log('Dias com faturamento acima da média: ' + qtdDiasAcimaDaMedia);
