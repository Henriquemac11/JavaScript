// Módulo 05: Estruturas de repetição

// 1. for
const mensagem = 'JavaScript é poderoso';
for (let i = 0; i < mensagem.length; i++) {
  console.log(`Posição ${i}:`, mensagem[i]);
}

// 2. while
let contador = 1;
while (contador <= 5) {
  console.log('Contador while:', contador);
  contador++;
}

// 3. do while
let tentativas = 0;
do {
  console.log('Tentativa do-while:', tentativas);
  tentativas++;
} while (tentativas < 3);

// 4. Exemplo prático: soma de números
let soma = 0;
for (let numero = 1; numero <= 10; numero++) {
  soma += numero;
}
console.log('Soma de 1 a 10:', soma);

// Desafio prático:
// Use um loop para criar um array com os primeiros 10 números pares.
const numerosPares = [];
for (let valor = 2; valor <= 20; valor += 2) {
  numerosPares.push(valor);
}
console.log('Números pares:', numerosPares);
