// Módulo 10: Estruturas avançadas

// 1. Destructuring em objetos e arrays
const usuario = {
  nome: 'Beatriz',
  idade: 29,
  endereco: {
    cidade: 'Recife',
    estado: 'PE',
  },
};

const { nome, idade, endereco: { cidade } } = usuario;
console.log('Nome:', nome);
console.log('Idade:', idade);
console.log('Cidade:', cidade);

const coordenadas = [12, 34];
const [x, y] = coordenadas;
console.log('Coordenadas:', x, y);

// 2. Spread e rest
const numeros = [1, 2, 3];
const novosNumeros = [...numeros, 4, 5];
console.log('Spread em array:', novosNumeros);

const dadosProduto = { ...usuario, preco: 99.9 };
console.log('Spread em objeto:', dadosProduto);

const somar = (...valores) => valores.reduce((soma, valor) => soma + valor, 0);
console.log('Soma com rest:', somar(4, 7, 1, 8));

// 3. Closures
function criarContador() {
  let contador = 0;
  return function () {
    contador += 1;
    return contador;
  };
}

const contador = criarContador();
console.log('Contador 1:', contador());
console.log('Contador 2:', contador());

// Desafio prático:
// Use spread para combinar dois arrays e, em seguida, crie uma função que some valores usando rest.
const listaA = [10, 20];
const listaB = [30, 40];
const listaCompleta = [...listaA, ...listaB];
console.log('Lista completa:', listaCompleta);
console.log('Soma com rest:', somar(...listaCompleta));
