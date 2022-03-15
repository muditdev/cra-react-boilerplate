import axios, { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
const onResponse = (response: AxiosResponse): AxiosResponse => {
  // console.info(`[response] [${JSON.stringify(response)}]`);
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  // console.error(`[response error] [${JSON.stringify(error)}]`);
  if (error.response?.status === 401) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast.error('Session expired. Please login again.');
    setTimeout(() => {
      window.location.replace('/seller/login');
    }, 1000);
  }
  return Promise.reject(error);
};
export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
});

apiClient.interceptors.response.use(onResponse, onResponseError);

export const buyerApiClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
});

const onBuyerResponseError = (error: AxiosError): Promise<AxiosError> => {
  // console.error(`[response error] [${JSON.stringify(error)}]`);
  if (error.response?.status === 401) {
    localStorage.removeItem('buyer-token');
    localStorage.removeItem('buyer-user');
    toast.error('Session expired. Please login again.');
    setTimeout(() => {
      window.location.replace('/login');
    }, 1000);
  }
  return Promise.reject(error);
};

function onBuyerRequest(config: any) {
  const token = localStorage.getItem('buyer-token');
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token;
  }
  return config;
}

buyerApiClient.interceptors.request.use(onBuyerRequest);
buyerApiClient.interceptors.response.use(onResponse, onBuyerResponseError);
