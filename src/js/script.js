import SignIn from './SignInUI';
import SignUp from './SignUpUI';

const sib = document.querySelector('#sign-in-btn');
const sub = document.querySelector('#sign-up-btn');
const main = document.querySelector('#main');
const exit = document.querySelector('#exit');
const logOut = document.querySelector('#logOut');
const addBtn = document.querySelector('#add-btn');
const burger = document.querySelector('#burger');

sib.addEventListener('click', SignIn.signIn);
sub.addEventListener('click', SignUp.signUp);

exit.addEventListener('click', () => {
  main.classList.remove('no-login');
  main.classList.remove('edit');
});
logOut.addEventListener('click', () => {
  main.classList.add('no-login');
  main.classList.remove('edit');
});
addBtn.addEventListener('click', () => {
  main.classList.remove('no-login');
  main.classList.add('edit');
});
burger.addEventListener('change', () => {
  if (burger.checked) {
    main.classList.add('mob-menu');
  } else {
    main.classList.remove('mob-menu');
  }
});
