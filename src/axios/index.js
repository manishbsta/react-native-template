import axios from 'axios';

import {URLS} from '../core/constants/urls';

const client = axios.create({
  baseURL: URLS.baseUrl,
});

client.interceptors.request.use(
  config => {
    return config;
  },
  error => error,
);

export default client;
