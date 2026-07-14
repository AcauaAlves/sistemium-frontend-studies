const formulario = document.getElementById("formulario-contato");
const feedback = document.getElementById("feedback-formulario");

const campos = {
  nome: document.getElementById("nome"),
  email: document.getElementById("email"),
  mensagem: document.getElementById("mensagem"),
};

const erros = {
  nome: document.getElementById("erro-nome"),
  email: document.getElementById("erro-email"),
  mensagem: document.getElementById("erro-mensagem"),
};

function limparErros() {
  erros.nome.textContent = "";
  erros.email.textContent = "";
  erros.mensagem.textContent = "";
  feedback.textContent = "";
}

function validarEmail(email) {
  return email.includes("@") && email.includes(".");
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  limparErros();

  const nome = campos.nome.value.trim();
  const email = campos.email.value.trim();
  const mensagem = campos.mensagem.value.trim();

  let formularioValido = true;

  if (nome.length < 3) {
    erros.nome.textContent = "Digite um nome com pelo menos 3 caracteres.";
    formularioValido = false;
  }

  if (!validarEmail(email)) {
    erros.email.textContent = "Digite um email válido.";
    formularioValido = false;
  }

  if (mensagem.length < 10) {
    erros.mensagem.textContent = "Digite uma mensagem com pelo menos 10 caracteres.";
    formularioValido = false;
  }

  if (!formularioValido) {
    feedback.textContent = "Revise os campos destacados antes de enviar.";
    return;
  }

  feedback.textContent = "Mensagem enviada com sucesso. Esta é uma validação simulada do estudo.";
  formulario.reset();
});
