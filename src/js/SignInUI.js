import Auth from './AuthUI';
import AuthAPI from './AuthAPI';

export default class SignIn extends Auth {
  static user = document.querySelector('#user');

  static pass = document.querySelector('#pass');

  static keep = document.querySelector('#keep');

  static signIn() {
    const { user, pass } = SignIn;
    console.log(pass.value);
    if (user.value.length < 6)
      Auth.error.innerText = `Login at least six letter.`;
    else if (!Auth.regExpPass.test(pass.value)) {
      Auth.error.innerText = `Password must contain at least one letter, at least one number, and be longer than six charaters.`;
    } else {
      AuthAPI.login({
        identifier: user.value,
        password: pass.value,
      })
        .then((data) => {
          Auth.error.innerText = ``;
          return data;
        })
        .then(() => console.log('sign in')) // Передать даннные на UserUI
        .then() // если keep true оставить чувака в системе
        .then(() => Auth.main.classList.remove('no-login'))
        .catch((e) => {
          Auth.error.innerText = e.message();
          return e;
        });
    }
  }
}
