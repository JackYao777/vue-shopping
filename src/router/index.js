import { createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/home/index.vue'
import Login from '@/views/login/index.vue'
import Layout from '@/views/layout/index.vue'
import Category from '@/views/category/index.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '',
                    component: Home
                },
                {
                    path: 'category/:id',
                    component: Category
                },
            ]
        },
        {
            path: '/login',
            component: Login
        }
    ],
    //路由滚动行为定制
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router
