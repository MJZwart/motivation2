import { Component, computed, ref } from "vue";
import CompletedOverview from "../completed/CompletedOverview.vue";
import TaskListOverview from "../tasks/TaskListOverview.vue";
import Login from "../auth/Login.vue";
import Register from "../auth/Register.vue";

export const routes: Record<string, Route> = {
    completed: {
        component: CompletedOverview,
        path: '/completed',
    },
    tasks: {
        component: TaskListOverview,
        path: '/',
    },
    login: {
        component: Login,
        path: '/login'
    },
    register: {
        component: Register,
        path: '/register',
    },
}

const activePage = ref<Route>(routes['tasks']);

export const setActivePage = (routeName: string) => {
    const route = routes[routeName];
    if (!route) return console.error('No route found for name ', routeName);
    activePage.value = route;
}

export const getActivePage = computed(() => activePage.value);

interface Route {
    component: Component;
    path: string;
}