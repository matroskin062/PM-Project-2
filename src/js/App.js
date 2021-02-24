import BoardUI from './BoardUI';
import UI from './UI';

export default class App {
  static init() {
    new BoardUI().render();
    UI.init();
  }

}
