<template>
    <ToastContainer />
    <Navigation />
    <VillageOverview v-if="isLoggedIn" rounded-lg c-white p-2 />
    <div flex flex-col z-1 max-w-3xl mx-auto>
        <AuthPage v-if="!isLoggedIn" />
        <TaskListOverview v-else rounded-lg c-white p-2 />
    </div>
</template>

<script setup lang="ts">
import TaskListOverview from './tasks/TaskListOverview.vue';
import VillageOverview from './village/VillageOverview.vue';
import AuthPage from './auth/AuthPage.vue';
import Navigation from './Navigation.vue';
import { isLoggedIn, getMe } from './service/userRepository';
import { onMounted } from 'vue';
import ToastContainer from './components/toast/ToastContainer.vue';

onMounted(async() => {
    await getMe();
});
</script>