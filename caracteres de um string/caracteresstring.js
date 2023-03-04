// Definindo a string a ser invertida
const str = "target sistemas";

// Criando um array vazio para armazenar os caracteres invertidos
let reversed = [];

// Iterando pela string, começando do último caractere e indo até o primeiro
for (let i = str.length - 1; i >= 0; i--) {
  // Adicionando cada caractere ao array reversed
  reversed.push(str[i]);
}

// Juntando os caracteres do array reversed em uma nova string
const result = reversed.join('');

// Imprimindo o resultado
console.log(result);
