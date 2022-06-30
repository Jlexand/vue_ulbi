import { createRouter, createWebHashHistory } from 'vue-router';
import Main from '@/pages/Main';
import UserPages from '@/pages/UserPages';
import PostPageWithStore from '@/pages/PostPageWithStore';
import About from '@/pages/About';
import PostIdPage from '@/pages/PostIdPage';

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: UserPages
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router;