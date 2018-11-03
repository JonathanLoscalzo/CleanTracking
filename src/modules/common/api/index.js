import axios from 'axios';
const url = "http://localhost:54356/"

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
