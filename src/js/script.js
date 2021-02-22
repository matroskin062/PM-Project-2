import SignIn from './SignInUI';
import SignUp from './SignUpUI';

const sib = document.querySelector('#sign-in-btn');
const sub = document.querySelector('#sign-up-btn');

sib.addEventListener('click', SignIn.signIn);
sub.addEventListener('click', SignUp.signUp);
