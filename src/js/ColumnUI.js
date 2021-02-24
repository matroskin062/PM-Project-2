import AddFormUI from './AddFormUI';

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

    column.append(title);
    new AddFormUI(this.status).render(column);
    column.append(cardList);

    this.columnContainer.append(column);
  }
  // TODO: Cards rendering
}

export default ColumnUI;
