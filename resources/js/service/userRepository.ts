import axios from "axios";
import { computed, ref } from "vue";

interface User {
    username: string;
}

const user = ref<User | null>(null);

export const isLoggedIn = computed(() => !!user.value)
export const getUser = computed(() => user.value);

export const login = async(credentials: {username: string, password: string}) => {
    const {data} = await axios.post('/login', credentials);
    if (!data) return console.error('Login failed, error message needed', data);
    user.value = data;
}

export const logout = async() => {
    await axios.post('/logout');
    user.value = null;
}

export const register = async(credentials: {username: string, password: string, password_confirmation: string}) => {
    const {data} = await axios.post('/register', credentials);
    if (!data) return console.error('Register failed, error message needed', data);
    user.value = data;
}

export const getMe = async() => {
    try {
        const {data} = await axios.get('/me');
        user.value = data;
    } catch (e) {
        return;
    }
}