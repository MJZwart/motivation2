import TaskListOverview from "../tasks/TaskListOverview.vue";
import CompletedOverview from "../completed/CompletedOverview.vue";
import Login from "../auth/Login.vue";
import Register from "../auth/Register.vue";
import { createRouter, createWebHistory } from "vue-router";
import { isLoggedIn } from "./userRepository";

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
    console.log(to)
    if (to.meta.auth && !isLoggedIn.value) {
        console.log(from)
        return next({path: '/login'});
    }
    next();
});

export default router;