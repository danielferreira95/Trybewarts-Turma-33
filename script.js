const email = document.getElementById('email');
const botao = document.querySelector('.btn-submit');
const senha = document.getElementById('senha');
const checkboxAgreement = document.getElementById('agreement');
const btnEnviar = document.querySelector('#submit-btn');
const spanSubmit = document.querySelector('#span-submit');
const textArea = document.querySelector('textarea');
const spanContaCaracteres = document.querySelector('#contador-caracteres');

const valid = () => {
  if (email.value === 'tryber@teste.com' || senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

const verificaAgreement = () => {
  console.log(document.querySelector('#agreement:checked'));
  if (document.querySelector('#agreement:checked')) {
    btnEnviar.removeAttribute('disabled');
    spanSubmit.style.color = 'green';
  } else {
    btnEnviar.setAttribute('disabled', 'disabled');
    spanSubmit.style.color = 'red';
  }
};

const contaCaracteres = () => textArea.value.length + 1;

const alteraSpanContaCaracteres = () => {
  const quantidadeCaracteres = contaCaracteres();
  spanContaCaracteres.innerText = 501 - quantidadeCaracteres;
};

botao.addEventListener('click', valid);
checkboxAgreement.addEventListener('click', verificaAgreement);
textArea.value = '';
textArea.addEventListener('keydown', alteraSpanContaCaracteres);
