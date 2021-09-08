import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../view/Home'
import Counter from '../components/Counter.vue'
import TodoList from '../components/TodoList.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: '',
        component: Home,
        meta: {
            title: "Home"
        }
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
        path: '/todoList',
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
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vuex-app`
    next()

})
export default router