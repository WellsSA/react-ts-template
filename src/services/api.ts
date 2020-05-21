/* eslint-disable no-param-reassign */
import axios from 'axios';
import { store } from 'store';
import config from 'config';

const api = axios.create({ baseURL: config.api.url });

api.interceptors.request.use(
  async config => {
    const { authentication } = store.getState();
    if (authentication?.token) {
      config.headers.Authorization = `Bearer ${authentication.token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default api;
