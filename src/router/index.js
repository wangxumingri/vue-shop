import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入Login.vue组件
import Login from '../components/Login'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login' // 访问根路径时，重定向到/login
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
]

const router = new VueRouter({
    routes
})

export default router
