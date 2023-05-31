const email = document.getElementById('email');
const botao = document.querySelector('.btn-submit');
const senha = document.getElementById('senha');

const valid = () => {
  if (email.value === 'tryber@teste.com' || senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

botao.addEventListener('click', valid);
