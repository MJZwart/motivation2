import './bootstrap';
import {createApp} from 'vue';
import App from './App.vue';
import '../css/app.css';
import 'uno.css';
import { getMe } from './service/userRepository';

const app = createApp(App);

await getMe();

import router from './service/router';
import { configureEcho } from '@laravel/echo-vue';

configureEcho({
    broadcaster: 'reverb',
});

app.use(router);

app.mount('#app');