const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
  mensagem.textContent =
    "A mensagem foi alterada com JavaScript usando seleção de elemento e evento de clique.";
});
