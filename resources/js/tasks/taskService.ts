import axios from "axios";
import { computed, ref } from "vue";

export interface Task {
    id?: number;
    task: string;
    completed: boolean | null;
}

const tasks = ref<Task[]>([]);

export const getTasks = computed(() => tasks.value);

export const createTask = async(task: Task) => {
    const {data} = await axios.post('/task/', task);
    tasks.value.push(data.data);
}

export const fetchTasks = async() => {
    const {data} = await axios.get('/task/');
    tasks.value = data.data;
}

export const markComplete = async(task: Task) => {
    if (!task.id) return;
    await axios.post(`/task/complete/${task.id}`);
    tasks.value.splice(tasks.value.findIndex(item => item.id === task.id), 1);
}