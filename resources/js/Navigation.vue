<template>
    <div bg-white bg-opacity-12 flex p-3>
        Nav
        <span ml-auto>
            <span v-if="isLoggedIn" clickable @click="logout">Logout</span>
            <span v-else gap-2 flex>
                <RouterLink clickable to="/login">Login</RouterLink>
                <RouterLink clickable to="/register">Register</RouterLink>
            </span>
        </span>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { isLoggedIn, logout } from './service/userRepository';
</script>