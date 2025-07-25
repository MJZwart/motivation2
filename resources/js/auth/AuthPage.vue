<template>
    <Register v-if="!loggingIn" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Register from './Register.vue';

const loggingIn = ref(false);
</script>