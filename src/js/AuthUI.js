import AuthAPI from './AuthAPI';

class Auth{
  static user
  static pass
  static error = document.querySelector( '#auth-error')
  static main = document.querySelector( '#main')
}

class SingIn extends Auth{
  static user = document.querySelector('#user')
  static pass = document.querySelector( '#pass')
  static keep = document.querySelector( '#keep')

  static singIn(){
    if(this.user.length < 6 || this.pass.length < 8){
       this.error.innerText = `too short...`
    } else{
      AuthAPI.login({identifier: this.user, password: this.pass})
        .then(() => this.error.innerText = ``)
        .then() // Передать даннные на UserUI
        .then() // если keep true оставить чувака в системе
        .then(() => main.classList.remove('no-login'))
        .catch((e) => this.error.innerText = e.message())
    }
  }

}

class SingUp extends Auth{
  static user = document.querySelector('#user-up')
  static pass = document.querySelector( '#pass-up')
  static email = document.querySelector( '#email-up')
  static regExpPass = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/
  static regExpEmail = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/

  static singUp(){
    if (this.user.length < 6) this.error.innerText = `Password must contain at least one letter, at least one number, and be longer than six charaters.`
    else if (!this.pass.length.match(this.regExpPass)) this.error.innerText = `Password must contain at least one letter, at least one number, and be longer than six charaters.`
    else if (!this.email.match(this.regExpEmail)) this.error.innerText = `Incorrect email.`
    else{
      AuthAPI.registration({username: this.user, email: this.email, password: this.pass})
        .then() // Передать даннные на UserUI
        .then(() => main.classList.remove('no-login'))
        .then(() => {
          SingIn.singIn()
        })
        .catch((e) => this.error.innerText = e.message())
    }
  }

}
export {SingIn, SingUp}
