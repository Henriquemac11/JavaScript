// Módulo 03: Operadores

// 1. Operadores aritméticos
const soma = 10 + 5;
const subtracao = 10 - 5;
const multiplicacao = 10 * 5;
const divisao = 10 / 5;
const modulo = 10 % 3;
const potenciacao = 2 ** 3;

console.log('Soma:', soma);
console.log('Subtração:', subtracao);
console.log('Multiplicação:', multiplicacao);
console.log('Divisão:', divisao);
console.log('Módulo:', modulo);
console.log('Potenciação:', potenciacao);

// 2. Operadores de comparação
console.log('10 == "10"?', 10 == '10');
console.log('10 === "10"?', 10 === '10');
console.log('5 > 3?', 5 > 3);
console.log('5 < 3?', 5 < 3);
console.log('5 >= 5?', 5 >= 5);

// 3. Operadores lógicos
const participacaoAtiva = true;
const aprovado = true;

console.log('AND (&&):', participacaoAtiva && aprovado);
console.log('OR (||):', participacaoAtiva || aprovado);
console.log('NOT (!):', !participacaoAtiva);

// Exemplo prático
const idade = 18;
const possuiDocumento = true;
const podeEntrar = idade >= 18 && possuiDocumento;
console.log('Pode entrar?', podeEntrar);

// Desafio prático:
// Combine operadores para criar uma validação de compra segura.
const saldo = 120;
const precoCompra = 99.99;
const temSaldo = saldo >= precoCompra;
const compraPermitida = !isNaN(precoCompra) && temSaldo;
console.log('Compra permitida?', compraPermitida);
