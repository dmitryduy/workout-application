import axios from 'axios';

import { storage } from './utils/storage';

const instance = axios.create({
  baseURL: 'http://localhost:5000'
});

instance.interceptors.request.use(config => {
  console.log(config);
  if (config.headers) {
    config.headers.Authorization = 'Bearer ' + storage('workout-auth').getItem();
  }
  return config;
});

export default instance;