import axios from 'axios';
import { setErrorMessages } from './service/errorService';

// @ts-ignore
window.axios = axios;

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        switch(error.response.status) {
            case 422:
                setErrorMessages(error.response.data.errors);
            default:
                return Promise.reject(error);
        }
    }
)