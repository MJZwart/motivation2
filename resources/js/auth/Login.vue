<template>
    <div panel flex flex-col>
        Login
        <label for="username">Username</label>
        <input id="username" name="username" v-model="login.username" />
        <label for="password">Password</label>
        <input id="password" name="password" v-model="login.password" />
        <button btn @click="loginUser">Register</button>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';

const login = ref({
    username: '',
    password: '',
})

const loginUser = async () => {
    const {data} = await axios.post('/login', login.value);
    console.log(data);
}
</script>