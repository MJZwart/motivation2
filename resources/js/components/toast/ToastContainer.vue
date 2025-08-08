<template>
    <div absolute z-0 w-full h-full flex class="-my-2 -mx-2" pointer-events-none>
        <div ml-auto mt-auto>
            <ToastComp z-999 v-for="(toast, idx) in getToasts" :key="idx" :toast pointer-events-auto />
        </div>
    </div>
</template>

<script setup lang="ts">
import ToastComp from './Toast.vue';
import { getToasts } from './toastService';
</script>