import updateIcon from '../img/update-icon.svg';
import deleteIcon from '../img/delete-icon.svg';
import CardAPI from './CardAPI';

class CardUI {
  static get modal() {
    return document.querySelector('#task-modal');
  }

  static get confirmBtn() {
    return document.querySelector('#task-confirm');
  }

  static get cancelBtn() {
    return document.querySelector('#task-cancel');
  }

  constructor({ id, title, status, description }) {
    this.id = id;
    this.title = title;
    this.status = status;
    this.description = description;
  }

  renderCard(target) {
    const card = document.createElement('li');
    card.classList.add('card');

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

    card.append(title, controls);

    target.appendChild(card);

    const deleteHandler = (event) => {
      event.preventDefault();
      // eslint-disable-next-line no-alert
      const isConfirm = window.confirm('Are you sure to delete this card?');
      if (isConfirm) {
        CardAPI.deleteCard(this.id).then(() => card.remove());
      }
    };

    deleteBtn.addEventListener('click', deleteHandler);
  }
}

export default CardUI;
