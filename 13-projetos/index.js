// Módulo 13: Projetos práticos

// 1. Calculadora simples
function calcular(operacao, valorA, valorB) {
  switch (operacao) {
    case 'soma':
      return valorA + valorB;
    case 'subtracao':
      return valorA - valorB;
    case 'multiplicacao':
      return valorA * valorB;
    case 'divisao':
      return valorB !== 0 ? valorA / valorB : 'Divisão por zero';
    default:
      return 'Operação inválida';
  }
}

console.log('Calculadora: 5 + 3 =', calcular('soma', 5, 3));
console.log('Calculadora: 10 / 2 =', calcular('divisao', 10, 2));

// 2. To-do list
const todoList = [];

function adicionarTarefa(tarefa) {
  todoList.push({ id: todoList.length + 1, tarefa, concluida: false });
}

function concluirTarefa(id) {
  const tarefa = todoList.find((item) => item.id === id);
  if (tarefa) tarefa.concluida = true;
}

function listarTarefas() {
  return todoList.map((item) => `${item.id}. [${item.concluida ? 'x' : ' '}] ${item.tarefa}`);
}

adicionarTarefa('Estudar JavaScript');
adicionarTarefa('Criar projeto de portfólio');
concluirTarefa(1);
console.log('To-do list:');
console.log(listarTarefas().join('\n'));

// 3. Jogo simples de adivinhação
function jogoAdivinhacao(chute, valorSecreto) {
  if (chute === valorSecreto) return 'Parabéns! Você acertou.';
  if (chute < valorSecreto) return 'Tente um número maior.';
  return 'Tente um número menor.';
}

const valorSecreto = Math.floor(Math.random() * 10) + 1;
const chute = 7; // Simulação de entrada de usuário
console.log('Jogo de adivinhação:', jogoAdivinhacao(chute, valorSecreto));
console.log('Valor secreto era:', valorSecreto);

// 4. Consumo de API usando Pokémon API
async function buscarPokemon(nomePokemon = 'pikachu') {
  try {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`);
    const dados = await resposta.json();

    const tipos = dados.types.map((entrada) => entrada.type.name);
    const habilidades = dados.abilities.map((entrada) => entrada.ability.name);

    console.log('Pokémon:', {
      nome: dados.name,
      id: dados.id,
      altura: dados.height,
      peso: dados.weight,
      tipos,
      habilidades,
    });
  } catch (erro) {
    console.error('Erro ao consumir API Pokémon:', erro.message);
  }
}

buscarPokemon('pikachu');

// Desafio prático:
// Adapte a calculadora para receber dados de um objeto e implemente função de remoção de tarefa na to-do list.
function removerTarefa(id) {
  const indice = todoList.findIndex((item) => item.id === id);
  if (indice >= 0) {
    todoList.splice(indice, 1);
  }
}

removerTarefa(2);
console.log('To-do list após remoção:');
console.log(listarTarefas().join('\n'));
