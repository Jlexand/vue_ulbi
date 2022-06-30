import { createRouter, createWebHashHistory } from 'vue-router';
import Main from '@/pages/Main';
import UserPages from '@/pages/UserPages';
import About from '@/pages/About';

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/users',
        component: UserPages
    },
    {
        path: '/about',
        component: About
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router;