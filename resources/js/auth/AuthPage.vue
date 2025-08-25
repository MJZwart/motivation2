<template>
    <div flex max-w-3xl mx-auto w-full mt-2>
        <Register v-if="!loggingIn" @login="loggingIn = true" />
        <Login v-else @register="loggingIn = false" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Register from './Register.vue';
import Login from './Login.vue';

const loggingIn = ref(true);
</script>