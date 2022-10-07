window.onload = () => {
  const btnEnviar = document.querySelector("#btn-submit");
  btnEnviar.addEventListener("click", btnSubmit);
  // console.log(btnEnviar);

  const btnReset = document.querySelector("#btn-reset");
  btnReset.addEventListener("click", btnClear);

  const divulgacao = document.querySelector("#input-divulgacao");
  divulgacao.addEventListener("change", habilitarBtn);
  // console.log(divulgacao);
};

function btnSubmit(evt) {
  evt.preventDefault();
  const validacao = validacaoTexto();

  if (validacao === false) {
    alert('Dados invalidos')
  }
  else{
    alert('Dados enviados com sucesso');
  }
}

function btnClear() {
  const form = document.querySelectorAll("input");
  const textArea = document.querySelector("textarea");

  for (let index = 0; index < form.length; index += 1) {
    const userInput = form[index];
    userInput.value = "";
    userInput.checked = false;
  }
  textArea.value = "";
}

function habilitarBtn() {
  const btnEnviar = document.querySelector("#btn-submit");
  const divulgacao = document.querySelector("#input-divulgacao");

  btnEnviar.disabled = !divulgacao.checked;
}

function validacaoTexto() {
  const name = document.querySelector("#input-name").value.length;
  const validarName = name < 10 || name > 40;

  const email = document.querySelector("#input-email");
  const validarEmail = email < 10 || email > 50;

  const textArea = document.querySelector("#textarea");
  const validarText = textArea < 0 || textArea > 150;

  if (validarName || validarEmail || validarText) {
    return false;
  } else {
    return true;
  }
}
