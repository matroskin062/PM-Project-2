import AuthAPI from './AuthAPI';
import emitter from './EventEmitter';

class SignUpUI {
  constructor() {
    this.user = document.querySelector('#username');
    this.pass = document.querySelector('#signup-pass');
    this.email = document.querySelector('#email');
    this.userError = document.querySelector('#username-err');
    this.emailError = document.querySelector('#email-err');
    this.signupError = document.querySelector('#signup-err');
    this.signUpModal = document.querySelector('#signup-modal');
  }

  resetFields() {
    this.user.value = '';
    this.pass.value = '';
    this.email.value = '';
  }

  signUp() {
    const {
      user,
      pass,
      email,
      userError,
      emailError,
      signupError,
      signUpModal,
    } = this;
    const regExpEmail = new RegExp(
      /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
    );
    let errors = 0;
    if (!user.value.trim()) {
      SignUpUI.errorLog(`There is an empty field`, userError);
      errors += 1;
    }
    if (!pass.value.trim()) {
      SignUpUI.errorLog(`There is an empty field`, signupError);
      errors += 1;
    }
    if (!regExpEmail.test(email.value)) {
      SignUpUI.errorLog(`Invalid email example@test.io`, emailError);
      errors += 1;
    }
    if (errors === 0) {
      AuthAPI.registration({
        username: user.value.trim(),
        email: email.value.trim(),
        password: pass.value.trim(),
      })
        .then(() => {
          signUpModal.classList.remove('active');
          this.resetFields();
          emitter.emit('authEvent');
        })
        .catch((e) => {
          const errorMsg = e.response.data.message[0].messages[0].message;
          SignUpUI.errorLog(errorMsg, emailError);
          return e;
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

export default new SignUpUI();
