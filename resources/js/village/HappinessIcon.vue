<template>
    <component :is="icon" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import HappyIcon from '../components/icons/mood/HappyIcon.vue';
import GladIcon from '../components/icons/mood/GladIcon.vue';
import NeutralIcon from '../components/icons/mood/NeutralIcon.vue';
import SadIcon from '../components/icons/mood/SadIcon.vue';
import AngryIcon from '../components/icons/mood/AngryIcon.vue';

const {happiness} = defineProps<{happiness: number}>();

const icon = computed(() => {
    if (happiness >= 70) return HappyIcon;
    if (happiness >= 60) return GladIcon;
    if (happiness >= 40) return NeutralIcon;
    if (happiness >= 20) return SadIcon;
    return AngryIcon;
});
</script>