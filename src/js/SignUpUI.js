import AuthAPI from './AuthAPI';

export default class SignUp {
  user = document.querySelector('#username');

  pass = document.querySelector('#signup-pass');

  email = document.querySelector('#email');

  userError = document.querySelector('#username-err');

  emailError = document.querySelector('#email-err');

  signupError = document.querySelector('#signup-err');



  signUp() {
    const { user, pass, email, userError, emailError, signupError, errorLog} = this;
    const  regExpEmail = new RegExp(
        /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
    );
    let errors = 0;
    if (user.value.length < 1) {
      errorLog(`There is an empty field`, userError)
      errors++;
    }
    if (pass.value.length < 1 ) {
      errorLog(`There is an empty field`, signupError)
      errors++;
    }
    if (!regExpEmail.test(email.value)) {
      errorLog(`Invalid email example@test.io`, emailError)
      errors++;
    }
    if (errors === 0){
      AuthAPI.registration({
        username: user.value,
        email: email.value,
        password: pass.value,
      })
        .catch((e) => {
          const errorMsg = e.response.data.message[0].messages[0].message
          errorLog(errorMsg, signupError)
          return e
         });
    }
  }

  errorLog(msg, target) {
    target.innerText = msg;
    setTimeout(() => {
      target.innerText = "";
    }, 2000)
  }
}
