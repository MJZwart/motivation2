import { computed, ref } from "vue";

type ToastType = 'warning' | 'success' | 'danger' | 'info';
export interface Toast {
    title: string;
    message: string;
    type: ToastType;
}

const toasts = ref<Toast[]>([]);

export const getToasts = computed(() => toasts.value);

export const addToToasts = (title: string, message: string, type: ToastType) => {
    console.log('Adding to toast');
    toasts.value.push({title, message, type});
    window.setTimeout(timeoutToast, 5000);
}

const timeoutToast = () => {
    toasts.value.shift();
}