const email = document.getElementById("email");
const botao = document.getElementById("btn-submit");
const senha = document.getElementById("senha");

const valid = () => {
    if (email.innerText == "tryber@teste.com" && senha.innerText == "123456") {
        console.log('Ola tryber')
    return alert("Olá, Tryber!");
  } else {
    console.log('Ola tryber')
    return alert("Email ou senha inválidos");
  }};

botao.addEventListener("click", valid());


