import axios, {AxiosError} from 'axios';

import {KEYS} from '../core/constants/storage-keys';
import {URLS} from '../core/constants/urls';
import {mmkv} from '../utils/mmkv';

const client = axios.create({
  baseURL: URLS.baseUrl,
  headers: {
    Accept: 'application/json',
  },
});

client.interceptors.request.use(
  async config => {
    config.headers['x-auth'] = mmkv.getString(KEYS.accessToken);
    return config;
  },
  error => Promise.reject(error),
);

// utility function to check if the error is AxiosError
export const isAxiosError = (error: unknown): error is AxiosError => {
  return axios.isAxiosError(error);
};

export default client;
