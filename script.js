const email = document.getElementById('email');
const botao = document.querySelector('.btn-submit');
const senha = document.getElementById('senha');
const checkboxAgreement = document.getElementById('agreement');
const btnEnviar = document.querySelector('#submit-btn');
const spanSubmit = document.querySelector('#span-submit');

const valid = () => {
  if (email.value === 'tryber@teste.com' || senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

const verificaAgreement = () => {
  console.log(document.querySelector('#agreement:checked'));
  if(document.querySelector('#agreement:checked')){
  btnEnviar.removeAttribute('disabled');
  spanSubmit.style.color = 'green';
  }else{
    btnEnviar.setAttribute('disabled', 'disabled');
    spanSubmit.style.color = 'red';
  }
};

botao.addEventListener('click', valid);
checkboxAgreement.addEventListener('click', verificaAgreement);




