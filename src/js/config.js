import axios from 'axios';
import User from './User';
import emitter from './EventEmitter';

const END_POINT = 'https://radiant-temple-07706.herokuapp.com';

const axiosInstance = axios.create({
  baseURL: END_POINT,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  if (User.token) {
    Object.assign(config.headers, {
      Authorization: `Bearer ${User.token}`,
    });
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response.status === 401) {
      User.resetUser();
      emitter.emit('authEvent');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
