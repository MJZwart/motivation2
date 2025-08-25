<template>
    <div>
        Tasklists
        <div>
            <h5>List title</h5>
            <div flex flex-col gap-1>
                <template v-for="task in getTasks" :key="task.id">
                    <span ml-2 my-1 hover:font-bold cursor-pointer @click="markComplete(task)">{{ task.task }}</span>
                </template>
                <form @submit.prevent="addItem">
                    <input input 
                        p-2 
                        bg-transparent 
                        rounded-none
                        border-none 
                        b-b-solid 
                        b-b-white 
                        b-b-2 
                        c-white 
                        shadow-none
                        v-model="newTask" 
                        placeholder="New item" />
                    <button btn-sm btn type="submit">Add</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { createTask, getTasks, markComplete } from './taskService';

const newTask = ref('');

const addItem = async() => {
    createTask({task: newTask.value, completed: null});
    newTask.value = '';
}
</script>

<style>
.thing {
    background: none;
}
</style>