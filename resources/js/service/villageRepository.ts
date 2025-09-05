import axios from "axios";
import { computed, ref } from "vue";

interface Village {
    id: number;
    name: string;
    villagers: number;
    progress: number;
    coins: number;
    food: number;
    material: number;
    happiness: number;
    farmer: number;
    labourer: number;
    toolsmith: number;
    artist: number;
    researcher: number;
    merchant: number;
}

const activeVillage = ref<Village | null>(null);

export const getVillage = computed(() => activeVillage.value);
const setVillage = (newVillage: Village) => {
    activeVillage.value = newVillage;
}

export const loadVillage = async() => {
    const {data} = await axios.get('/village');
    if (!data) return console.error('Could not load village');
    setVillage(data.data);
}