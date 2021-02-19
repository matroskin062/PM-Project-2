import axiosInstance from './config';

export default class CardAPI {
  static getCardStatuses() {
    return axiosInstance
      .get('/statuses')
      .then((response) => response.data)
      .catch(console.log);
  }

  static getCards() {
    return axiosInstance
      .get('/cards')
      .then((response) => response.data)
      .catch(console.log);
  }

  static getCard(id) {
    return axiosInstance
      .get(`/cards/${id}`)
      .then((response) => response.data)
      .catch(console.log);
  }

  static createCard({ title, description, status }) {
    return axiosInstance
      .post('/cards', {
        title,
        description,
        status,
      })
      .then((response) => response.data)
      .catch(console.log);
  }

  static updateCard({ id, title, description, status }) {
    return axiosInstance
      .put(`/cards/${id}`, {
        title,
        description,
        status,
      })
      .then((response) => response.data)
      .catch(console.log);
  }

  static deleteCard(id) {
    return axiosInstance
      .delete(`/cards/${id}`)
      .then((response) => response.data)
      .catch(console.log);
  }
}
