import Axios, { AxiosHeaders, InternalAxiosRequestConfig } from 'axios';

import { API_URL } from '@/config';
import { notification } from '@/stores/escapeAntd';
import storage from '@/utils/storage';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = storage.getToken();
  if (token) {
    (config.headers as AxiosHeaders).set('authorization', `${token}`);
  }

  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    notification.error({ message: '接口请求报错', description: message });

    return Promise.reject(error);
  }
);
