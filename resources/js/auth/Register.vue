<template>
    <div panel flex flex-col>
        Register
        <label for="username">Username</label>
        <input id="username" name="username" v-model="register.username" />
        <label for="password">Password</label>
        <input id="password" name="password" v-model="register.password" />
        <label for="password_confirmation">Repeat password</label>
        <input id="password_confirmation" name="password_confirmation" v-model="register.password_confirmation" />
        <button btn @click="registerUser">Register</button>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';

const register = ref({
    username: '',
    password: '',
    password_confirmation: '',
})

const registerUser = async () => {
    const {data} = await axios.post('/register', register.value);
    console.log(data);
}
</script>