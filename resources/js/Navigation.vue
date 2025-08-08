<template>
    <div panel flex mt-2>
        Nav
        <span ml-auto clickable @click="logout">Logout</span>
    </div>
</template>

<script setup lang="ts">
import { logout } from './service/userRepository';


</script>