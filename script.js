const email = document.getElementById('email');
const botao = document.getElementsByClassName('btn-submit');
const senha = document.getElementById('senha');

const valid = () => {
  if (email.value === 'tryber@teste.com' || senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

botao[0].addEventListener('click', () => valid);
