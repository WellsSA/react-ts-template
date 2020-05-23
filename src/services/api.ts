/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { authenticationLogoutRequest } from 'modules/authentication/actions';
import { store } from 'store';
import config from 'config';
import dictionary from './dictionary';

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
    const data = error?.response?.data;
    if (
      error?.response?.status === 401 &&
      (data?.errorCode === 'JWT_MISSING' || data?.errorCode === 'JWT_INVALID')
    ) {
      store.dispatch(authenticationLogoutRequest());
    }
    const hasMessageError = dictionary[data?.errorCode];
    if (hasMessageError) {
      toast(hasMessageError, {
        type: 'error',
      });
    } else {
      toast(dictionary.GENERIC_ERROR, {
        type: 'error',
      });
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
