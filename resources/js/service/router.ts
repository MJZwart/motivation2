import TaskListOverview from "../tasks/TaskListOverview.vue";
import CompletedOverview from "../completed/CompletedOverview.vue";
import Login from "../auth/Login.vue";
import Register from "../auth/Register.vue";
import { createRouter, createWebHistory } from "vue-router";
import { isLoggedIn } from "./userRepository";
import { clearErrors } from "./errorService";

export const routes = [
    {
        component: CompletedOverview,
        path: '/completed',
        meta: {auth: true,},
    },
    {
        component: TaskListOverview,
        path: '/',
        meta: {auth: true,},
    },
    {
        component: Login,
        path: '/login',
        meta: {auth: false,},
    },
    {
        component: Register,
        path: '/register',
        meta: {auth: false,},
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    clearErrors();
    
    if (to.meta.auth && !isLoggedIn.value) {
        return next({path: '/login'});
    }
    next();
});

export default router;