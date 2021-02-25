import AuthAPI from './AuthAPI';
import emitter from './EventEmitter';

class SignInUI {
  constructor() {
    this.user = document.querySelector('#identifier');
    this.pass = document.querySelector('#login-pass');
    this.idError = document.querySelector('#identifier-err');
    this.passError = document.querySelector('#password-err');
    this.loginModal = document.querySelector('#login-modal');
  }

  resetFields() {
    this.user.value = '';
    this.pass.value = '';
  }

  signIn() {
    const { user, pass, idError, passError, loginModal } = this;
    let errors = 0;
    if (!user.value.trim()) {
      SignInUI.errorLog(`There is an empty Username`, idError);
      errors += 1;
    }
    if (!pass.value.trim()) {
      SignInUI.errorLog(`There is an empty Password`, passError);
      errors += 1;
    }
    if (errors === 0) {
      AuthAPI.login({
        identifier: user.value.trim(),
        password: pass.value.trim(),
      })
        .then(() => {
          loginModal.classList.remove('active');
          this.resetFields();
          emitter.emit('authEvent');
        })
        .catch((e) => {
          const errorMsg = e.response.data.message[0].messages[0].message;
          SignInUI.errorLog(errorMsg, passError);
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

export default new SignInUI();
