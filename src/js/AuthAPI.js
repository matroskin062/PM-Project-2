import User from './User';
import axiosInstance from './config';

export default class AuthAPI {
  static login({ identifier, password }) {
    return axiosInstance
      .post('/auth/local', {
        identifier,
        password,
      })
      .then(({ data }) => {
        User.token = data.jwt;
        User.username = data.user.username;
        return data;
      });
  }

  static registration({ username, email, password }) {
    return axiosInstance
      .post('/auth/local/register', {
        username,
        email,
        password,
      })
      .then(({ data }) => {
        User.token = data.jwt;
        User.username = data.user.username;
        return data;
      });
  }
}
