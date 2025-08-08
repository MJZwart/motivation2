import { computed, ref } from "vue";

export interface Task {
    id: number;
    task: string;
}

const tasks = ref();

export const getTasks = computed(() => tasks.value);

export const createTask = (task: Task) => {
    
}