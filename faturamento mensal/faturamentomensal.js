// Definindo o objeto com o valor de faturamento de cada estado
const faturamentoMensal = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

// Calculando o valor total mensal da distribuidora
const totalMensal = Object.values(faturamentoMensal).reduce((acc, val) => acc + val);

// Criando um objeto para armazenar o percentual de representação de cada estado
const representacaoMensal = {};

// Calculando o percentual de representação de cada estado e armazenando no objeto representacaoMensal
for (let estado in faturamentoMensal) {
  representacaoMensal[estado] = (faturamentoMensal[estado] / totalMensal) * 100;
}

// Formatando a saída dos dados para exibição
console.log('Valor total mensal da distribuidora: R$ ' + totalMensal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
console.log('Percentual de representação por estado:');
for (let estado in representacaoMensal) {
  console.log(`${estado} - ${representacaoMensal[estado].toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`);
}
