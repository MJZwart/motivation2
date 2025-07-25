<template>
    <div>
        Tasklists
        <div>
            <h5>List title</h5>
            <div flex flex-col gap-1>
                <template v-for="task in tasks" :key="task.id">
                    <span>[ ] {{ task.task }}</span>
                </template>
                <span>
                    <input 
                        p-2 
                        bg-transparent 
                        border-none 
                        b-b-solid 
                        b-b-white 
                        b-b-2 
                        c-white 
                        v-model="newTask" 
                        placeholder="New item" />
                    <button btn-sm btn @click="addItem">Add</button>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tasks = ref([
    {
        id: 1,
        task: 'This is a task',
    },
    {
        id: 2,
        task: 'This is also a task',
    }
]);

const newTask = ref('');

const addItem = () => {
    tasks.value.push({id: tasks.value.length + 1, task: newTask.value});
}
</script>

<style>
.thing {
    background: none;
}
</style>