// Módulo 08: Funções

// 1. Função tradicional
function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao('Gabriel'));

// 2. Arrow function
const calcularArea = (largura, altura) => largura * altura;
console.log('Área:', calcularArea(5, 3));

// 3. Parâmetros padrão e retorno
const formatarPreco = (valor = 0, moeda = 'R$') => `${moeda} ${valor.toFixed(2)}`;
console.log(formatarPreco(24.9));

// 4. Função com callback
const aplicarOperacao = (valor, operacao) => operacao(valor);
const dobrar = (numero) => numero * 2;
console.log('Dobrar:', aplicarOperacao(7, dobrar));

// Desafio prático:
// Crie uma função que receba um array de números e retorne a média aritmética.
const calcularMedia = (valores) => {
  const soma = valores.reduce((acc, valor) => acc + valor, 0);
  return valores.length === 0 ? 0 : soma / valores.length;
};

console.log('Média:', calcularMedia([10, 8, 9, 7]));
