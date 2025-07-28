<template>
    <div flex flex-col max-w-3xl mx-auto>
        <Navigation mb-2 w-full />
        <AuthPage v-if="!isLoggedIn" w-full />
        <div v-else gap-2 w-full>
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
import { isLoggedIn } from './service/userRepository';
</script>