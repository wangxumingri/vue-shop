import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入Login.vue组件
import Login from '../components/Login'
import Home from '../components/home'

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
    },
    {
        path:'/home',
        name:"首页",
        component: Home
    }
];



const router = new VueRouter({
    routes
});

// 挂载路由导航守卫，防止未登录时，访问资源
router.beforeEach((to, from, next)=>{
    // 访问的是登录页，放行
    if ('/login' === to.path){
        return next();
    }
    // 取出token进行判断
    let token = window.sessionStorage.getItem("token");
    if (!token){
        // 没有token，跳转到登录页
        return next('/login');
    }

    // 有token，放行
    next();
});

export default router
