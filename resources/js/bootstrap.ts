import axios from 'axios';
import { setErrorMessages } from './service/errorService';
import { addToToasts } from './components/toast/toastService';

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
                if(error.response.data.errors && error.response.data.errors.length !== 0) {
                    addToToasts('Something went wrong', 'Please check your inputs.', 'danger');
                } else {
                    addToToasts('Something went wrong', error.response.data.message, 'danger');
                }
            default:
                return Promise.reject(error);
        }
    }
)