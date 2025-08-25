<template>
    <div bg-white bg-opacity-12 flex p-3>
        Nav
        <span ml-auto clickable @click="logout">Logout</span>
    </div>
</template>

<script setup lang="ts">
import { logout } from './service/userRepository';


</script>