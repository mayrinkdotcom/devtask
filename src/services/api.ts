import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://devtask-api.herokuapp.com/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@devtask:token');

  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});
