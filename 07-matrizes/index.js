// Módulo 07: Matrizes

// 1. Criando uma matriz bidimensional
const tabela = [
  ['Nome', 'Idade', 'Cidade'],
  ['Ana', 25, 'Rio de Janeiro'],
  ['Carlos', 32, 'Belo Horizonte'],
];

console.log('Matriz inicial:');
console.table(tabela);

// 2. Percorrendo a matriz com loops aninhados
for (let linha = 0; linha < tabela.length; linha++) {
  for (let coluna = 0; coluna < tabela[linha].length; coluna++) {
    console.log(`Valor [${linha}][${coluna}]:`, tabela[linha][coluna]);
  }
}

// 3. Transformando matriz em objetos
const pessoas = tabela.slice(1).map((linha) => ({
  nome: linha[0],
  idade: linha[1],
  cidade: linha[2],
}));
console.log('Objetos convertidos:', pessoas);

// Desafio prático:
// Adicione uma nova linha à matriz com um novo registro e exiba a tabela.
const novaPessoa = ['Beatriz', 28, 'Salvador'];
tabela.push(novaPessoa);
console.table(tabela);
