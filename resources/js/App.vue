<template>
    <ToastContainer />
    <Navigation />
    <VillageOverview v-if="isLoggedIn" rounded-lg c-white p-2 />
    <div flex flex-col z-1 max-w-3xl mx-auto>
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import VillageOverview from './village/VillageOverview.vue';
import Navigation from './Navigation.vue';
import { isLoggedIn } from './service/userRepository';
import ToastContainer from './components/toast/ToastContainer.vue';
import { RouterView } from 'vue-router';
</script>