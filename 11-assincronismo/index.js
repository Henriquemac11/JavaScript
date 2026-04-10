// Módulo 11: Assincronismo

// 1. Callback
function buscarDadosComCallback(callback) {
  setTimeout(() => {
    callback({ usuario: 'Carlos', idade: 27 });
  }, 500);
}

buscarDadosComCallback((dados) => {
  console.log('Dados por callback:', dados);
});

// 2. Promise
function buscarDadosPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ usuario: 'Marcela', idade: 31 });
    }, 500);
  });
}

buscarDadosPromise().then((dados) => {
  console.log('Dados por promise:', dados);
});

// 3. async / await
async function obterDadosAsync() {
  const dados = await buscarDadosPromise();
  console.log('Dados por async/await:', dados);
}

obterDadosAsync();

// 4. Fetch API usando Pokémon API
async function buscarPokemon(nomePokemon = 'pikachu') {
  try {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`);
    const dados = await resposta.json();

    const tipos = dados.types.map((entrada) => entrada.type.name);
    console.log('Pokémon encontrado:', {
      nome: dados.name,
      id: dados.id,
      tipos,
      altura: dados.height,
      peso: dados.weight,
    });
  } catch (erro) {
    console.error('Erro ao buscar Pokémon:', erro.message);
  }
}

buscarPokemon('pikachu');

// Desafio prático:
// Crie uma função assíncrona que aguarde uma promessa e trate os dados retornados.
async function processarDados() {
  try {
    const usuario = await buscarDadosPromise();
    console.log('Processando usuário:', usuario.usuario);
  } catch (erro) {
    console.error('Erro ao processar dados:', erro);
  }
}

processarDados();
