import User from './User';
import axiosInstance from './config';

export default class AuthAPI {
  static login({ identifier, password }) {
    console.log(axiosInstance.headers);
    return axiosInstance
      .post('/auth/local', {
        identifier,
        password,
      })
      .then(({ data }) => {
        console.log(axiosInstance.headers);
        User.token = data.jwt;
        return data;
      })
      .catch(console.log);
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
        return data;
      })
      .catch(console.log);
  }
}
