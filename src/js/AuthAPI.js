import User from './User';
import axiosInstance from './config';

export default class AuthAPI {
  static async login({ identifier, password }) {
    return axiosInstance
      .post('/auth/local', {
        identifier,
        password,
      })
      .then(({ data }) => {
        User.token = data.jwt;
        console.log(data);
      })
      .catch(console.log);
  }

  static async registration({ username, email, password }) {
    return axiosInstance
      .post('/auth/local/register', {
        username,
        email,
        password,
      })
      .then(({ data }) => {
        User.token = data.jwt;
        console.log(data);
      })
      .catch(console.log);
  }
}
