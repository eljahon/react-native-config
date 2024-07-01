
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const request = axios.create({
    baseURL: 'https://api.gtm.kebyo.me', // Replace with your API's base URL
});

// Add a request interceptor to attach the token to every request
request.interceptors.request.use(
    async config => {
        // Assuming you store your token in AsyncStorage
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default request;
