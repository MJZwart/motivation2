<template>
    <div panel flex>
        Nav
        <span ml-auto clickable @click="logout">Logout</span>
    </div>
</template>

<script setup lang="ts">
import { logout } from './service/userRepository';


</script>