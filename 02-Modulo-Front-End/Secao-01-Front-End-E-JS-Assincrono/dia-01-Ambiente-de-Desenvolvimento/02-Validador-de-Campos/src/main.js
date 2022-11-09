import validator from "validator";
import "./style.css";
// console.log(validator.isEmail(''));

// Aqui, vamos selecionar, pelos ids, os campos em nossa página
const campoDeTexto = document.querySelector("#value");
const botao = document.querySelector("#button");
const seletor = document.querySelector("#option");
const textoDeSaida = document.querySelector("#answer");

botao.addEventListener("click", (event) => {
  // Vamos usar o preventDefault() para evitar que, ao
  // clicar no botão, ele recarregue a página
  event.preventDefault();

  // Aqui, criamos um objeto cujas chaves são os tipos a
  // serem validados. Por exemplo, a chave CPF valida se
  // o campoDeTexto.value é um CPF.

  const campos = {
    cpf: validator.isTaxID(campoDeTexto.value, "pt-BR"),
    hexColor: validator.isHexColor(campoDeTexto.value), // exemplo: O código Hexadecimal para cores consiste em seis letras ou números precedidos do “#”
    email: validator.isEmail(campoDeTexto.value),
    uiuid: validator.isUUID(campoDeTexto.value),
    // UUID é um identificador universalmente exclusivo utilizado para identificação de qualquer coisa no mundo da computação.
    url: validator.isURL(campoDeTexto.value),
  };
  textoDeSaida.innerHTML = `A validação retornou ${campos[seletor.value]}`;
});
