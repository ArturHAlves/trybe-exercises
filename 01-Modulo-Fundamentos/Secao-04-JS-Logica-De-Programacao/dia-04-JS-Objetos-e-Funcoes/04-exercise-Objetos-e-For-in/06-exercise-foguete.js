let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

let nomeCompleto = leitor.nome + " " + leitor.sobrenome;
let livroFavorito = leitor.livrosFavoritos

console.log("O livro favorito de " + nomeCompleto + " se chama " + leitor.livrosFavoritos[0].titulo);
