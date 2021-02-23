import ColumnUI from './ColumnUI';
import CardAPI from './CardAPI';

class BoardUI {
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
}

export default BoardUI;
