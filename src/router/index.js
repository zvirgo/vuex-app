import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Counter from '../components/Counter.vue'
import TodoList from '../components/TodoList.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Counter',
        name: 'Counter',
        component: Counter,
        meta: {
            title: "Counter"
        }
    },
    {
        path: '/TodoList',
        name: 'TodoList',
        component: TodoList,
        meta: {
            title: "TodoList"
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router