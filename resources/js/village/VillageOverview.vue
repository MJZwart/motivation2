<template>
    <div bg-white bg-opacity-3 v-if="getVillage">
        <div flex justify-center items-center gap-5 @click="collapse = !collapse" cursor-pointer>
            <h3 my-2>{{ getVillage.name }}</h3>
            <span flex items-center gap-1><PersonIcon /> {{ getVillage.villagers }}</span>
            <!-- <span flex items-center gap-1><TrendUpIcon /> Growing</span> -->
            <span flex items-center gap-1><HappinessIcon :happiness="getVillage.happiness" /> {{getVillage.happiness}}/100</span>
        </div>
        <div 
            flex 
            justify-center
            :class="collapse ? 'max-h-0 opacity-0' : 'max-h-96 opacity-100'"
            transition="all duration-300 ease-in-out"
        >
            <VillagerDetails />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import PersonIcon from '../components/icons/PersonIcon.vue';
// import TrendUpIcon from '../components/icons/TrendUpIcon.vue';
import HappinessIcon from './HappinessIcon.vue';
import { loadVillage, getVillage } from '../service/villageRepository';
import VillagerDetails from './VillagerDetails.vue';

const collapse = ref(true);

onMounted(async() => {
    loadVillage();
});
</script>