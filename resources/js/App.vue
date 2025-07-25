<template>
    <div flex flex-col gap-2 items-center w-full>
        <VillageOverview panel-2 rounded-lg c-white p-2 max-w-3xl w-full />
        <TaskListOverview panel-1 rounded-lg c-white p-2 max-w-3xl w-full />
    </div>
</template>

<script setup lang="ts">
import TaskListOverview from './tasks/TaskListOverview.vue';
import VillageOverview from './village/VillageOverview.vue';

</script>