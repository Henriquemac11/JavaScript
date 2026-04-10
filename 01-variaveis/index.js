// Módulo 01: Variáveis

// 1. Declaração de variáveis com var, let e const:
var nomeAntigo = 'Ana';
let nomeAtual = 'Carlos';
const nomeFixo = 'Eduardo';

console.log('var:', nomeAntigo);
console.log('let:', nomeAtual);
console.log('const:', nomeFixo);

// 2. Escopo de bloco (let/const) vs escopo de função (var):
if (true) {
  let escopoBloco = 'valor de bloco';
  var escopoFuncao = 'valor de função';
  console.log('Dentro do bloco:', escopoBloco);
}

// escopoBloco não existe aqui, mas escopoFuncao existe:
console.log('Fora do bloco, var:', escopoFuncao);

// 3. Boas práticas de nomenclatura:
const idadeUsuario = 28;
let quantidadeDeProdutos = 15;

console.log('Idade do usuário:', idadeUsuario);
console.log('Quantidade de produtos:', quantidadeDeProdutos);

// Desafio prático:
// Crie uma variável let chamada `cidade` e uma const chamada `pais`, então imprima no console.

let cidade = 'São Paulo';
const pais = 'Brasil';
console.log(`${cidade}, ${pais}`);
