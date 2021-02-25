import signInUI from './SignInUI';
import signUpUI from './SignUpUI';
import User from './User';
import emitter from './EventEmitter';

export default class AuthUI {
  constructor() {
    this.loginButton = document.querySelector('#login-btn');
    this.signUpButton = document.querySelector('#signup-btn');
    this.openLogin = document.querySelector('#open-login');
    this.loginReDir = document.querySelector('#login-redirect');
    this.signupReDir = document.querySelector('#signup-redirect');
    this.openSignup = document.querySelector('#open-signup');
    this.loginModal = document.querySelector('#login-modal');
    this.signUpModal = document.querySelector('#signup-modal');
    this.modalClose = document.querySelectorAll('.modal-close-btn');
    this.logOutBtn = document.querySelector('#logout-btn');
  }

  registerListeners() {
    const {
      loginButton,
      signUpButton,
      openLogin,
      openSignup,
      loginModal,
      signUpModal,
      modalClose,
      loginReDir,
      signupReDir,
      logOutBtn,
    } = this;

    [openLogin, loginReDir].forEach((btn) =>
      btn.addEventListener('click', () => {
        loginModal.classList.add('active');
        signUpModal.classList.remove('active');
      })
    );

    [openSignup, signupReDir].forEach((btn) =>
      btn.addEventListener('click', () => {
        loginModal.classList.remove('active');
        signUpModal.classList.add('active');
      })
    );

    modalClose.forEach((btn) => {
      btn.addEventListener('click', () => {
        loginModal.classList.remove('active');
        signUpModal.classList.remove('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('active')) {
        loginModal.classList.remove('active');
        signUpModal.classList.remove('active');
      }
    });

    loginButton.addEventListener('click', () => signInUI.signIn());
    signUpButton.addEventListener('click', () => signUpUI.signUp());
    logOutBtn.addEventListener('click', () => {
      User.resetUser();
      emitter.emit('authEvent');
    });
  }
}
