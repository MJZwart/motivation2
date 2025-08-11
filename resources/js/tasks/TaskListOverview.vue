
<template>
    <div panel>
        <TaskList />
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import TaskList from './TaskList.vue';
import { fetchTasks } from './taskService';

onMounted(async() => {
    await fetchTasks();
})
</script>