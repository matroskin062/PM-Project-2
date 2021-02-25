import Sortable from 'sortablejs';
import AddFormUI from './AddFormUI';
import CardAPI from './CardAPI';
import CardUI from './CardUI';

class ColumnUI {
  constructor(column, cards) {
    this.columnContainer = document.querySelector('.column-list');
    this.status = column.value;
    this.title = column.title;
    this.cards = cards;
  }

  createColumn() {
    const column = document.createElement('li');
    column.classList.add('column');

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = this.title;

    const cardList = document.createElement('ul');
    cardList.classList.add('card-list');

    this.dragDropHandler(cardList);

    column.append(title);
    new AddFormUI(this.status).render(column);
    column.append(cardList);

    this.columnContainer.append(column);

    this.cards.forEach((card) => {
      new CardUI(card).renderCard(cardList);
    });
  }

  dragDropHandler(cardList) {
    const { status } = this;
    return new Sortable(cardList, {
      group: 'shared',
      animation: 150,
      onAdd({ item }) {
        const id = item.dataset.cardId;
        CardAPI.updateCard(id, status);
      },
    });
  }
}

export default ColumnUI;
