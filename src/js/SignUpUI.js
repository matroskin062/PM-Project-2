import Auth from './AuthUI';
import AuthAPI from './AuthAPI';
import SignIn from './SignInUI';

export default class SignUp extends Auth {
  static user = document.querySelector('#user-up');

  static pass = document.querySelector('#pass-up');

  static email = document.querySelector('#email-up');

  static signUp() {
    const { user, pass, email } = SignUp;
    if (user.value.length < 6)
      Auth.error.innerText = `Login at least six letter.`;
    else if (!Auth.regExpPass.test(pass.value))
      Auth.error.innerText = `Password must contain at least one letter, at least one number, and be longer than six charaters.`;
    else if (!Auth.regExpEmail.test(email.value))
      Auth.error.innerText = `Incorrect email.`;
    else {
      AuthAPI.registration({
        username: user.value,
        email: email.value,
        password: pass.value,
      })
        .then((data) => {
          Auth.error.innerText = ``;
          return data;
        })
        .then(() => console.log('sign up')) // Передать даннные на UserUI
        .then(() => Auth.main.classList.remove('no-login'))
        .then((data) => {
          SignIn.signIn();
          return data;
        })
        .catch((e) => {
          Auth.error.innerText = e.message();
          return e;
        });
    }
  }
}
