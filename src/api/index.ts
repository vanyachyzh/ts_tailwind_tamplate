/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'; // це базовий урл який варто зберігати як глобальну змінну на проекті

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async (config: any) => {
    const value = localStorage.getItem('accessToken');
    if (value) config.headers.Authorization = `Bearer ${value}`;

    return config;
  },
  (err: any) => {
    return Promise.reject(err);
  },
);
