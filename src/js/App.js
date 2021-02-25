import BoardUI from './BoardUI';
import AuthUI from './AuthUI';
import UserUI from './UserUI'

export default class App {
  static init() {
    new BoardUI().render()
    new AuthUI().init();
    new UserUI().init();
  }

}
