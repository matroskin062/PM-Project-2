import User from './User';
import emitter from './EventEmitter';

export default class UserUI {
  constructor() {
    this.AuthHead = document.querySelector('.auth');
    this.UserHead = document.querySelector('.user-info');
    this.userName = document.querySelector('#username-in-head');

    this.init = this.init.bind(this);
    emitter.subscribe('authEvent', this.init);
  }

  init() {
    const { AuthHead, UserHead, userName } = this;
    if (User.token) {
      userName.innerText = User.username;
      UserHead.classList.add('active');
      AuthHead.classList.remove('active');
    } else {
      userName.innerText = '';
      AuthHead.classList.add('active');
      UserHead.classList.remove('active');
    }
  }
}
