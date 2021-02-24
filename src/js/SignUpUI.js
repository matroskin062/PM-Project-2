import AuthAPI from './AuthAPI';

export default class SignUp {
  static user = document.querySelector('#username');

  static pass = document.querySelector('#psignup-pass');

  static email = document.querySelector('#email');

  static error = document.querySelector('#email-err');

  static signUp() {
    const { user, pass, email, error} = SignUp;
    if (user.value.length < 1 || pass.value.length < 1 || email.value.length < 1 ) {
      errorLog(`There is an empty field`, error)
    } else {
      AuthAPI.registration({
        username: user.value,
        email: email.value,
        password: pass.value,
      })
        .then(() => console.log('sign up')) // Передать даннные на UserUI
        .catch((e) => {
          errorLog(e.message, error)
          return e;
        });
    }
  }

  static errorLog(msg, target) {
    target.innerText = msg;
    setTimeout(() => {
      target.innerText = "";
    }, 2000)
  }
}
