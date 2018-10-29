import axios from 'axios';

const api = axios.create({
    baseURL: '/api',
})

api.interceptors.request.use(config => {
    if (localStorage.getItem('JWT_LOGIN')) {
        config.headers.common.Authorization = `Bearer ${localStorage.getItem('JWT_LOGIN')}`;
    }

    return config;
})

export default api;
