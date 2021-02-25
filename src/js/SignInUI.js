import AuthAPI from './AuthAPI';

export default class SignIn{
  user = document.querySelector('#identifier');

  pass = document.querySelector('#login-pass');

  idError = document.querySelector('#identifier-err');

  passError = document.querySelector('#password-err');

  signIn() {
    const { user, pass, idError, passError, errorLog} = this;
    let errors = 0;
    if (!user.value.trim()) {
      errorLog(`There is an empty Username`, idError);
      errors++;
    }if (!pass.value.trim()) {
      errorLog(`There is an empty Password`, passError);
      errors++;
    }
    if (errors === 0) {
      AuthAPI.login({
        identifier: user.value.trim(),
        password: pass.value.trim(),
      })
        .catch((e) => {
          const errorMsg = e.response.data.message[0].messages[0].message;
          errorLog(errorMsg, passError);
          return e;
        });
    }
  }

  errorLog(msg, target) {
    target.innerText = msg;
    setTimeout(() => {
      target.innerText = "";
    }, 2000);
  }
}
