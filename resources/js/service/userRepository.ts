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
    if (!data) return console.error('Login failed, error message needed');
    user.value = data;
}

export const logout = async() => {
    await axios.post('/logout');
    user.value = null;
}