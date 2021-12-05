import axios from 'axios';
import toast from 'react-hot-toast';

const onResponse = (response) => response;

const onResponseError = (error) => {
	if (error.response?.status === 401) {
		// handle unauthorized
		toast.error('Session expired. Please login again.');
		setTimeout(() => {
			window.location.replace('/');
		}, 1000);
	}
	return Promise.reject(error);
};
export const apiClient = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_API,
});

apiClient.interceptors.response.use(onResponse, onResponseError);
