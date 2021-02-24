import updateIcon from '../img/update-icon.svg';
import deleteIcon from '../img/delete-icon.svg';

class CardUI {
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
  }
}

export default CardUI;
