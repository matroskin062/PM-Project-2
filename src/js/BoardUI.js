import ColumnUI from './ColumnUI';
import CardAPI from './CardAPI';

class BoardUI {
  async render() {
    this.statuses = await CardAPI.getCardStatuses();
    this.cards = await CardAPI.getCards();
    this.statuses.map((status) => {
      const colCards = this.cards.filter(
        (card) => card.status === status.value
      );
      return new ColumnUI(status, colCards).createColumn();
    });
  }
}

export default BoardUI;
