<template>
    <div panel>
        <form flex flex-col mb-2 gap-1 @submit.prevent="registerUser">
            <h3 my-2>Register new account</h3>
            <label for="username">Username</label>
            <input id="username" name="username" v-model="register.username" />
            <label for="password">Password</label>
            <input id="password" name="password" type="password" v-model="register.password" />
            <label for="password_confirmation">Repeat password</label>
            <input id="password_confirmation" name="password_confirmation" type="password" v-model="register.password_confirmation" />
            <button btn type="submit" mt-2>Register</button>
        </form>
        <span>Already have an account? <span clickable @click="emit('login')">Log in here.</span></span>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';

const emit = defineEmits(['login']);

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