import CardAPI from './CardAPI';

class CardModalUI {
  constructor(cardInstance) {
    this.cardModal = document.querySelector('#task-modal');
    this.titleInput = this.cardModal.querySelector('#title');
    this.descriptionInput = this.cardModal.querySelector('#description');
    this.titleErr = this.cardModal.querySelector('#title-err');

    this.card = cardInstance;
    this.registerListeners();
  }

  openModal() {
    this.cardModal.classList.add('active');
    this.titleInput.value = this.card.title;
    this.descriptionInput.value = this.card.description;
  }

  updateCard(event) {
    event.preventDefault();

    if (this.titleInput.value.trim()) {
      this.titleErr.textContent = '';

      const updatedCard = {
        id: this.card.id,
        title: this.titleInput.value,
        description: this.descriptionInput.value,
      };

      CardAPI.updateCard(updatedCard).then((data) => {
        this.card.updateCardInfo(data);
        this.cardModal.classList.remove('active');
      });
    } else {
      this.titleErr.textContent = 'Title must be defined.';
    }
  }

  registerListeners() {
    const closeBtn = this.cardModal.querySelector('.modal-close-btn');
    const confirmBtn = this.cardModal.querySelector('.modal-btn');

    closeBtn.addEventListener('click', () => {
      this.cardModal.classList.remove('active');
    });

    confirmBtn.addEventListener('click', (event) => {
      this.updateCard(event);
    });
  }
}

export default CardModalUI;
