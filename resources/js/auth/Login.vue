<template>
    <div panel w-full>
        <form flex flex-col gap-1 @submit.prevent="loginUser" mb-2>
            <h3 my-2>Log in</h3>
            <FormError name="username">
                <label for="username">Username</label>
                <input input id="username" name="username" placeholder="Username" v-model="loginCredentials.username" />
            </FormError>
            <FormError name="password">
                <label for="password">Password</label>
                <input input id="password" type="password" name="password" placeholder="Password" v-model="loginCredentials.password" />
            </FormError>
            <button btn type="submit" mt-2>Login</button>
        </form>
        <span>No account? <span clickable @click="emit('register')">Sign up here.</span></span>
    </div>
</template>

<script setup lang="ts">
import FormError from '../components/FormError.vue';
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