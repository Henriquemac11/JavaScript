// Módulo 04: Estruturas condicionais

// 1. if / else / else if
const temperatura = 28;

if (temperatura >= 30) {
  console.log('Está muito quente.');
} else if (temperatura >= 20) {
  console.log('Clima agradável.');
} else {
  console.log('Faz frio.');
}

// 2. switch
const diaDaSemana = 3;
let nomeDoDia;

switch (diaDaSemana) {
  case 1:
    nomeDoDia = 'Segunda-feira';
    break;
  case 2:
    nomeDoDia = 'Terça-feira';
    break;
  case 3:
    nomeDoDia = 'Quarta-feira';
    break;
  default:
    nomeDoDia = 'Dia inválido';
}

console.log('Dia selecionado:', nomeDoDia);

// 3. Exemplo prático com validação
const nota = 7.5;
let status;

if (nota >= 7) {
  status = 'Aprovado';
} else if (nota >= 5) {
  status = 'Recuperação';
} else {
  status = 'Reprovado';
}

console.log('Status do aluno:', status);

// Desafio prático:
// Crie uma estrutura condicional que categorize idade em 'infantil', 'jovem', 'adulto' e 'idoso'.
const idade = 45;
let categoria;

if (idade < 12) {
  categoria = 'Infantil';
} else if (idade < 18) {
  categoria = 'Jovem';
} else if (idade < 60) {
  categoria = 'Adulto';
} else {
  categoria = 'Idoso';
}

console.log('Categoria etária:', categoria);
