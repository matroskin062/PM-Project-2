import {SingIn, SingUp} from './AuthUI';
const sib = document.querySelector( '#sing-in-btn')
const sub = document.querySelector( '#sing-up-btn')

sib.addEventListener('click', SingIn.singIn)
sub.addEventListener('click', SingUp.singUp)
