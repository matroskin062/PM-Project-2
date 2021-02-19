import axios from 'axios';
import User from './User';

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

export default axiosInstance;
