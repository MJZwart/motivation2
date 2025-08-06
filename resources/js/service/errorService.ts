import { ref } from "vue";

interface Error {
    [key: string]: string[];
}

export const errors = ref<Error | null>();

export const setErrorMessages = (errorMessages: Error) => {
    errors.value = errorMessages;
}

export const clearErrors = () => {
    errors.value = null;
}

export const hasError = (errorName: string) => {
    if (!errors.value) return false;
    return !!errors.value[errorName];
}