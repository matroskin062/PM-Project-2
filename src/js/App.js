import BoardUI from './BoardUI';
import AuthUI from './AuthUI';

export default class App {
  static init() {
    new BoardUI().render();
    new AuthUI().init();
  }

}
