<template>
    <div fixed bottom-0 right-0>
        <div ml-auto mt-auto>
            <ToastComp z-999 v-for="(toast, idx) in getToasts" :key="idx" :toast pointer-events-auto />
        </div>
    </div>
</template>

<script setup lang="ts">
import ToastComp from './Toast.vue';
import { getToasts } from './toastService';
</script>