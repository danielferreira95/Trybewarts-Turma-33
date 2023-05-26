const email = document.getElementById('email');
const botao = document.getElementById('btn-submit');
const senha = document.getElementById('senha');

const valid = () => email.value === 'tryber@teste.com' && senha.value === '123456'?:alert('Olá, Tryber!'):alert('Email ou senha inválidos.')
botao.addEventListener('click', valid());