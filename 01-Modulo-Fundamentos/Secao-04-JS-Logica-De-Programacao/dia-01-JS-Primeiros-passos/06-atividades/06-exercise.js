// Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

let xadrez = "DAMA";

switch (xadrez.toLowerCase()) {
  case "torre":
    console.log("Movimento vertical e horizontal");
    break;

  case "rei":
    console.log("Movimento curto: diagonal, vertical e horizontal");
    break;

    case "dama":
    console.log("Movimento longo: vertical, diagonal e horizontal");
    break;

    case "bispo":
    console.log("Movimento longo: diagonal");
    break;

    case "cavalo":
      console.log("Movimento: vertical e horizontal  ");
      break;

      case "peao":
      console.log("Movimento: vertical e horizontal  ");
      break;

      default:
        console.log("Deu erro");

}
