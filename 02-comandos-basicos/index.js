// Módulo 02: Comandos básicos

// 1. console.log para saída de informação
console.log('Aprendendo comandos básicos em JavaScript.');

// 2. Simulação de entrada de dados
const nomeDoAluno = 'Matheus';
const idadeDoAluno = 21;
console.log(`Nome: ${nomeDoAluno}, Idade: ${idadeDoAluno}`);

// 3. Tipos de dados principais
const texto = 'Exemplo de string';
const numero = 42;
const booleano = true;
const nulo = null;
const indefinido = undefined;

console.log('string:', texto);
console.log('number:', numero);
console.log('booleano:', booleano);
console.log('null:', nulo);
console.log('undefined:', indefinido);

// 4. Exemplo de conversão de tipos
const valorString = '123';
const valorNumero = Number(valorString);
console.log('String para número:', valorNumero, typeof valorNumero);

// Desafio prático:
// Simule uma entrada de dados para preço e quantidade e calcule o valor total.

const precoUnitario = 19.9;
const quantidade = 3;
const valorTotal = precoUnitario * quantidade;
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
