import ColumnUI from './ColumnUI';
import CardAPI from './CardAPI';
import User from './User';
import emitter from './EventEmitter';

class BoardUI {
  constructor() {
    this.columnContainer = document.querySelector('.column-list');
    this.init = this.init.bind(this);

    emitter.subscribe('authEvent', this.init);
  }

  async render() {
    this.statuses = await CardAPI.getCardStatuses();
    this.cards = await CardAPI.getCards();
    this.statuses.forEach((status) => {
      const colCards = this.cards.filter(
        (card) => card.status === status.value
      );
      new ColumnUI(status, colCards).createColumn();
    });
  }

  init() {
    if (User.token) {
      this.render();
    } else {
      this.columnContainer.innerHTML = '';
    }
  }
}

export default BoardUI;
