// Módulo 09: Programação Orientada a Objetos (POO)

class Produto {
  constructor(nome, preco) {
    this._nome = nome;
    this._preco = preco;
  }

  get nome() {
    return this._nome;
  }

  get preco() {
    return this._preco;
  }

  set preco(novoPreco) {
    if (novoPreco >= 0) {
      this._preco = novoPreco;
    }
  }

  exibirInformacoes() {
    return `${this._nome} custa R$ ${this._preco.toFixed(2)}`;
  }
}

class Livro extends Produto {
  constructor(nome, preco, autor) {
    super(nome, preco);
    this.autor = autor;
  }

  exibirInformacoes() {
    return `${this.nome} por ${this.autor} custa R$ ${this.preco.toFixed(2)}`;
  }
}

const livro = new Livro('JavaScript Completo', 79.9, 'Marcos Silva');
console.log(livro.exibirInformacoes());

// Abstração e encapsulamento
console.log('Nome do livro:', livro.nome);

// Polimorfismo:
const produtoGenerico = new Produto('Caderno', 15.3);
console.log(produtoGenerico.exibirInformacoes());
console.log(livro.exibirInformacoes());

// Desafio prático:
// Crie uma classe `Usuario` com nome, email e método para apresentar o usuário.
class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }

  apresentar() {
    return `Usuário: ${this.nome}, email: ${this.email}`;
  }
}

const usuario = new Usuario('Renata', 'renata@example.com');
console.log(usuario.apresentar());
