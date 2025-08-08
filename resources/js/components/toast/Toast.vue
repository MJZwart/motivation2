<template>
    <div flex flex-col p-2 w-70>
        <span :bg="toast.type" bg-opacity-30 p-3 rounded-t-lg>{{ toast.title }}</span>
        <span p-4 bg-white bg-opacity-10 rounded-br-lg>{{ toast.message }}</span>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Toast } from './toastService';

const {toast} = defineProps<{toast: Toast}>();
</script>