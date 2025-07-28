<template>
    <Register v-if="!loggingIn" @login="loggingIn = true" />
    <Login v-else @register="loggingIn = false" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Register from './Register.vue';
import Login from './Login.vue';

const loggingIn = ref(true);
</script>