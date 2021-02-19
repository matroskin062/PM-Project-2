import axios from 'axios';
import User from './User';

const END_POINT = 'https://radiant-temple-07706.herokuapp.com';

const axiosInstance = axios.create({
  baseURL: END_POINT,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.defaults.headers.common.Authorization =
  (User.token && `Bearer ${User.token}`) || '';

export default axiosInstance;
