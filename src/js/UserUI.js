export default class UserUI {
  constructor() {
    this.AuthHead = document.querySelector('.auth');
    this.UserHead = document.querySelector('.user-info');
    this.userName = document.querySelector('#username-in-head');

  }

  init() {
    const {AuthHead, UserHead, userName} = this;
    const user = localStorage.getItem('username')
    if(user){
      userName.innerText = user;
      UserHead.classList.add('active');
      AuthHead.classList.remove('active');
      return true
    }
    userName.innerText = "";
    AuthHead.classList.add('active');
    UserHead.classList.remove('active');
    return false
  }

}
