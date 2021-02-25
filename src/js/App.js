import BoardUI from './BoardUI';
import AuthUI from './AuthUI';

export default class App {
  static init() {
    new AuthUI().init();
    new BoardUI().init();
  }
}
