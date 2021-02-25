import BoardUI from './BoardUI';
import AuthUI from './AuthUI';
import UserUI from './UserUI';

export default class App {
  static init() {
    new AuthUI().init();
    new UserUI().init();
    new BoardUI().init();
  }
}
