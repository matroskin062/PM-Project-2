import updateIcon from '../img/update-icon.svg';
import deleteIcon from '../img/delete-icon.svg';
import CardAPI from './CardAPI';
import CardModalUI from './CardModalUI';

class CardUI {
  constructor({ id, title, status, description }) {
    this.id = id;
    this.title = title;
    this.status = status;
    this.description = description;

    this.card = null;
  }

  renderCard(target) {
    this.card = document.createElement('li');
    this.card.classList.add('card');

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = this.title;

    const controls = document.createElement('p');
    controls.classList.add('controls');

    const updateBtn = document.createElement('img');
    updateBtn.src = updateIcon;

    const deleteBtn = document.createElement('img');
    deleteBtn.src = deleteIcon;

    controls.append(updateBtn, deleteBtn);

    this.card.append(title, controls);

    target.appendChild(this.card);

    const deleteHandler = (event) => {
      event.preventDefault();
      // eslint-disable-next-line no-alert
      const isConfirm = window.confirm('Are you sure to delete this card?');
      if (isConfirm) {
        CardAPI.deleteCard(this.id).then(() => this.card.remove());
      }
    };

    const updateHandler = (event) => {
      event.preventDefault();
      new CardModalUI(this).openModal();
    };

    updateBtn.addEventListener('click', updateHandler);
    deleteBtn.addEventListener('click', deleteHandler);
  }

  updateCardInfo({ title, description, status }) {
    const cardTitle = this.card.querySelector('.title');
    this.title = title;
    this.description = description;
    this.status = status;
    cardTitle.textContent = this.title;
  }
}

export default CardUI;
