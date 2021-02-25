// eslint-disable-next-line import/no-cycle
import SignIn from './SignInUI';
import SignUp from './SignUpUI';
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

    this.init = this.init.bind();

    this.registerListeners();
    emitter.subscribe('loggedIn', this.init);
  }

  // TODO userInfo render
  // eslint-disable-next-line class-methods-use-this
  init() {
    if (User.token) {
      console.log(true);
    } else {
      console.log(false);
    }
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
          if(e.target.classList.contains('active')){
              loginModal.classList.remove('active');
              signUpModal.classList.remove('active');
          }
        });

        loginButton.addEventListener('click', () => new SignIn().signIn());
        signUpButton.addEventListener('click', () => new SignUp().signUp());
    }
}
