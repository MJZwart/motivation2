<template>
    <div panel>
        <form flex flex-col mb-2 gap-1 @submit.prevent="registerUser">
            <h3 my-2>Register new account</h3>
            <label for="username">Username</label>
            <input id="username" name="username" v-model="registerCredentials.username" />
            <label for="password">Password</label>
            <input id="password" name="password" type="password" v-model="registerCredentials.password" />
            <label for="password_confirmation">Repeat password</label>
            <input id="password_confirmation" name="password_confirmation" type="password" v-model="registerCredentials.password_confirmation" />
            <button btn type="submit" mt-2>Register</button>
        </form>
        <span>Already have an account? <span clickable @click="emit('login')">Log in here.</span></span>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { register } from '../service/userRepository';

const emit = defineEmits(['login']);

const registerCredentials = ref({
    username: '',
    password: '',
    password_confirmation: '',
})

const registerUser = () => {
    register(registerCredentials.value);
}
</script>