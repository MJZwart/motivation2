<template>
    <div bg-white bg-opacity-12 flex p-3>
        Nav
        <span ml-auto>
            <span v-if="isLoggedIn" clickable @click="logout">Logout</span>
            <span v-else gap-2 flex>
                <span clickable @click="setActivePage('login')">Login</span>
                <span clickable @click="setActivePage('register')">Register</span>
            </span>
        </span>
    </div>
</template>

<script setup lang="ts">
import { setActivePage } from './service/router';
import { isLoggedIn, logout } from './service/userRepository';


</script>