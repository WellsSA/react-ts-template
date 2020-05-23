/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { authenticationLogoutRequest } from 'modules/authentication/actions';
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

api.interceptors.response.use(
  async config => {
    return config;
  },
  error => {
    if (error?.response?.status === 401) {
      store.dispatch(authenticationLogoutRequest());
    }
    return Promise.reject(error);
  },
);

export async function retryApi<T>(
  url: string,
  options: AxiosRequestConfig,
  maximumRetry = 0,
  attempt = 0,
  delay = 0,
): Promise<AxiosResponse<T>> {
  try {
    await new Promise(resolve => setTimeout(resolve, delay));
    const response = await api.request({ url, ...options });

    return response;
  } catch (e) {
    if (attempt >= maximumRetry) throw e;

    return retryApi(url, options, attempt + 1, (delay || 1000) * 2);
  }
}

export default api;
