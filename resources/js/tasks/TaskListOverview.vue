
<template>
    <div panel max-w-3xl mx-auto w-full mt-2>
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