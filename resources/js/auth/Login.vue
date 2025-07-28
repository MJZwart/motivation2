<template>
    <div panel>
        <form flex flex-col gap-1 @submit.prevent="loginUser" mb-2>
            <h3 my-2>Log in</h3>
            <label for="username">Username</label>
            <input id="username" name="username" v-model="loginCredentials.username" />
            <label for="password">Password</label>
            <input id="password" type="password" name="password" v-model="loginCredentials.password" />
            <button btn type="submit" mt-2>Login</button>
        </form>
        <span>No account? <span clickable @click="emit('register')">Sign up here.</span></span>
    </div>
</template>

<script setup lang="ts">
import {login} from '../service/userRepository';
import { ref } from 'vue';

const emit = defineEmits(['register']);

const loginCredentials = ref({
    username: '',
    password: '',
})

const loginUser = () => {
    login(loginCredentials.value);
}
</script>