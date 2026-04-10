// Módulo 06: Arrays

// 1. Criação e manipulação básica
const cores = ['vermelho', 'verde', 'azul'];
console.log('Array inicial:', cores);

cores.push('amarelo');
console.log('Após push:', cores);

const primeiraCor = cores[0];
console.log('Primeira cor:', primeiraCor);

cores[1] = 'verde-escuro';
console.log('Array atualizado:', cores);

// 2. Métodos avançados: map, filter, reduce
const numeros = [1, 2, 3, 4, 5];

const numerosDuplicados = numeros.map((numero) => numero * 2);
console.log('Números duplicados:', numerosDuplicados);

const numerosPares = numeros.filter((numero) => numero % 2 === 0);
console.log('Números pares:', numerosPares);

const somaTotal = numeros.reduce((acumulador, valor) => acumulador + valor, 0);
console.log('Soma total:', somaTotal);

// 3. Exemplo prático: lista de tarefas
const tarefas = ['Estudar JavaScript', 'Revisar código', 'Enviar relatório'];
console.log('Tarefas:', tarefas.join(' | '));

// Desafio prático:
// Crie um array de objetos com nomes e idades e filtre apenas os maiores de 18.
const pessoas = [
  { nome: 'Julia', idade: 17 },
  { nome: 'Luiz', idade: 22 },
  { nome: 'Marina', idade: 30 }
];

const maioresDeIdade = pessoas.filter((pessoa) => pessoa.idade >= 18);
console.log('Maiores de idade:', maioresDeIdade);
