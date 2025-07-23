<template>
    <div flex flex-col>
        <VillageOverview />
        <TaskListOverview />
    </div>
</template>

<script setup lang="ts">
import TaskListOverview from './tasks/TaskListOverview.vue';
import VillageOverview from './village/VillageOverview.vue';

</script>