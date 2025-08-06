<template v-if="errorMessage">
    <slot />
    <div c-red text-sm>{{ errorMessage }}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { errors } from '../service/errorService';

const {name} = defineProps<{name: string}>();

const errorMessage = computed(() => {
    if (!name || !errors.value) return null;
    return (errors.value[name] || [])[0] || null;
})
</script>