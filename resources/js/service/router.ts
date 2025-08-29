import { Component, computed, markRaw, ref, shallowRef } from "vue";
import CompletedOverview from "../completed/CompletedOverview.vue";
import TaskListOverview from "../tasks/TaskListOverview.vue";
import Login from "../auth/Login.vue";
import Register from "../auth/Register.vue";
import { isLoggedIn } from "./userRepository";

export const routes: Record<string, Route> = {
    completed: {
        component: CompletedOverview,
        path: '/completed',
        auth: true,
    },
    tasks: {
        component: TaskListOverview,
        path: '/',
        auth: true,
    },
    login: {
        component: Login,
        path: '/login',
        auth: false,
    },
    register: {
        component: Register,
        path: '/register',
        auth: false,
    },
}

export const loginRoute = routes['login'];

const activePage = shallowRef<Route>(loginRoute);

export const setActivePage = (routeName: string) => {
    const route = routes[routeName];
    if (!route) return console.error('No route found for name ', routeName);
    if (route.auth && !isLoggedIn.value) {
        activePage.value = loginRoute;
        return;
    }
    activePage.value = route;
}

export const getActivePage = computed(() => activePage.value);

interface Route {
    component: Component;
    path: string;
    auth: boolean;
}