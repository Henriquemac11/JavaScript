// Módulo 12: Manipulação do DOM

// Este arquivo deve ser executado no navegador juntamente com o arquivo `index.html`.

// Seleção de elementos
const botao = document.querySelector('#botaoAction');
const mensagem = document.querySelector('#mensagem');
const campoTexto = document.querySelector('#campoTexto');

// Evento de clique
botao.addEventListener('click', () => {
  mensagem.textContent = `Olá, ${campoTexto.value || 'visitante'}! Bem-vindo ao DOM.`;
  mensagem.style.color = '#116531';
});

// Alteração de conteúdo e estilos
const titulo = document.querySelector('h1');
titulo.textContent = 'Exemplo de Manipulação do DOM';

// Desafio prático:
// Crie novo elemento de lista para cada texto digitado no campo.
const botaoAdicionar = document.querySelector('#botaoAdicionar');
const lista = document.querySelector('#listaMensagens');

botaoAdicionar.addEventListener('click', () => {
  const novoItem = document.createElement('li');
  novoItem.textContent = campoTexto.value || 'Item sem texto';
  lista.appendChild(novoItem);
  campoTexto.value = '';
});
