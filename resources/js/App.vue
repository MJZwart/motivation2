<template>
    <ToastContainer />
    <div flex flex-col max-w-3xl mx-auto z-1>
        <Navigation mb-2 />
        <AuthPage v-if="!isLoggedIn" />
        <div v-else flex flex-col gap-2>
            <VillageOverview panel-2 rounded-lg c-white p-2 />
            <TaskListOverview panel-1 rounded-lg c-white p-2 />
        </div>
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

onMounted(() => {
    getMe();
});
</script>