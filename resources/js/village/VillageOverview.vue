<template>
    <div bg-white bg-opacity-3>
        <div flex justify-center items-center gap-5 @click="collapse = !collapse" cursor-pointer>
            <h3 my-2>{{ villageName }}</h3>
            <span flex items-center gap-1><PersonIcon /> 500</span>
            <span flex items-center gap-1><TrendUpIcon /> Growing</span>
            <span flex items-center gap-1><HappinessIcon :happiness /> {{happiness}}/100</span>
        </div>
        <div 
            flex 
            justify-center
            :class="collapse ? 'max-h-0 opacity-0' : 'max-h-96 opacity-100'"
            transition="all duration-300 ease-in-out"
        >
            This is some more information
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PersonIcon from '../components/icons/PersonIcon.vue';
import TrendUpIcon from '../components/icons/TrendUpIcon.vue';
import HappinessIcon from './HappinessIcon.vue';

const villageName = ref('Village');
const happiness = ref(85);
const collapse = ref(true);
</script>