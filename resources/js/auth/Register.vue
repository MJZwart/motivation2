<template>
    <div panel w-full mt-2>
        <form flex flex-col mb-2 gap-1 @submit.prevent="registerUser">
            <h3 my-2>Register new account</h3>
            <FormError name="username">
                <label for="username">Username</label>
                <input input id="username" name="username" placeholder="Username" v-model="registerCredentials.username" />
            </FormError>
            <FormError name="password">
                <label for="password">Password</label>
                <input input id="password" name="password" type="password" placeholder="Password" v-model="registerCredentials.password" />
            </FormError>
            <FormError name="password_confirmation">
                <label for="password_confirmation">Repeat password</label>
                <input input id="password_confirmation" name="password_confirmation" type="password" placeholder="Repeat password" v-model="registerCredentials.password_confirmation" />
            </FormError>
            <button btn type="submit" mt-2>Register</button>
        </form>
        <span>Already have an account? <span clickable @click="emit('login')">Log in here.</span></span>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { register } from '../service/userRepository';
import FormError from '../components/FormError.vue';

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