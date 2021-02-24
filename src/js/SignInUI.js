import AuthAPI from './AuthAPI';

export default class SignIn{
  static user = document.querySelector('#identifier');

  static pass = document.querySelector('#login-pass');

  static error = document.querySelector('#login-err');

  static signIn() {
    const { user, pass, error, errorLog} = SignIn;
    if (user.value.length < 1 || pass.value.length < 1) {
      errorLog(`There is an empty field`, error)
    } else {
      AuthAPI.login({
        identifier: user.value,
        password: pass.value,
      })
        .then(() => console.log('sign in')) // Передать даннные на UserUI
        .catch((e) => {
          const errorMsg = e.response.data.message[0].messages[0].message
          errorLog(errorMsg, error)
          return e;
        });
    }
  }

  static errorLog(msg, target){
    target.innerText = msg;
    setTimeout(() => {
      target.innerText = "";
    },3000)
  }
}
