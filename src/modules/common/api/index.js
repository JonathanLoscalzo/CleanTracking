import axios from 'axios';
import config from '../../../properties/config'

const url = config.BACKEND_URL;

const api = axios.create({
    baseURL: url,
})

api.interceptors.request.use(config => {
    if (localStorage.getItem('JWT_LOGIN')) {
        config.headers.common.Authorization = `Bearer ${localStorage.getItem('JWT_LOGIN')}`;
    }

    return config;
})

export default api;
