import axiosInstance from './config';

export default class CardAPI {
  static async getCardStatuses() {
    return axiosInstance
      .get('/statuses')
      .then((response) => response.data)
      .catch(console.log);
  }

  static async getCards() {
    return axiosInstance
      .get('/cards')
      .then((response) => response.data)
      .catch(console.log);
  }

  static async getCard(id) {
    return axiosInstance
      .get(`/cards/${id}`)
      .then((response) => response.data)
      .catch(console.log);
  }

  static async createCard({ title, description, status }) {
    return axiosInstance
      .post('/cards', {
        title,
        description,
        status,
      })
      .then((response) => response.data)
      .catch(console.log);
  }

  static async updateCard({ id, title, description, status }) {
    return axiosInstance
      .put(`/cards/${id}`, {
        title,
        description,
        status,
      })
      .then((response) => response.data)
      .catch(console.log);
  }

  static async deleteCard(id) {
    return axiosInstance
      .delete(`/cards/${id}`)
      .then((response) => response.data)
      .catch(console.log);
  }
}
