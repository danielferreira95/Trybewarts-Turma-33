const email = document.getElementById("email");
const botao = document.getElementById("botao");
const senha = document.getElementById("senha");

const valid = () => {
    if (email.input.value === "tryber@teste.com" && senha.input.value === "123456") {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }};

botao.addEventListener("click", valid());


