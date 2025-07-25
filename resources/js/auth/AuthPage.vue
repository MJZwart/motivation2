<template>
    <Register v-if="!loggingIn" />
    <Login v-else />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Register from './Register.vue';
import Login from './Login.vue';

const loggingIn = ref(true);
</script>