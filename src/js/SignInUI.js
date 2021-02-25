import AuthAPI from './AuthAPI';

import UserUI from './UserUI';

import emitter from './EventEmitter';

export default class SignIn {
  constructor() {
    this.user = document.querySelector('#identifier');
    this.pass = document.querySelector('#login-pass');
    this.idError = document.querySelector('#identifier-err');
    this.passError = document.querySelector('#password-err');
    this.loginModal = document.querySelector('#login-modal');
  }

  signIn() {
    const { user, pass, idError, passError, loginModal } = this;
    let errors = 0;
    if (!user.value.trim()) {
      SignIn.errorLog(`There is an empty Username`, idError);
      errors += 1;
    }
    if (!pass.value.trim()) {
      SignIn.errorLog(`There is an empty Password`, passError);
      errors += 1;
    }
    if (errors === 0) {
      AuthAPI.login({
        identifier: user.value.trim(),
        password: pass.value.trim(),
      })
        .then(() => {
          loginModal.classList.remove('active');
          new UserUI().init(true);
        })
        .then(() => {
          emitter.emit('loggedIn');
        })
        .catch((e) => {
          const errorMsg = e.response.data.message[0].messages[0].message;
          SignIn.errorLog(errorMsg, passError);
        });
    }
  }

  static errorLog(msg, target) {
    const thisTarget = target;
    thisTarget.innerText = msg;
    setTimeout(() => {
      thisTarget.innerText = '';
    }, 2000);
  }
}
