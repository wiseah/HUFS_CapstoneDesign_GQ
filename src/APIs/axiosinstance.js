import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER,
    timeout: 5000, // 10000ms = 10초
});

export default axiosInstance;