import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入Login.vue组件
import Login from '../components/Login'
import Home from '../components/home'
// 导入employee.vue组件
import Employee_add  from '../components/employee/employee_add'
import Employee_list from '../components/employee/employee_list'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/login' // 访问根路径时，重定向到/login
    },
    {
        path: '/login',
        name: '登录',
        component: Login,
    },
    {
        path: '/employee/list',
        name: '员工列表',
        component: Employee_list,
        hidden:false
    },
    {
        path: '/employee/add',
        name: '编辑员工',
        component: Employee_add,
        hidden: true,
    },
    {
        path:'/home',
        name:"首页",
        component: Home,
        hidden:false,
        // children:[
        //     {
        //         path: '/employee/list',
        //         name: '员工列表',
        //         component: Employee_list,
        //         hidden:false
        //     },
        //     {
        //         path: '/employee/add',
        //         name: '编辑员工',
        //         component: Employee_add,
        //         hidden: true,
        //     },
            // {
            //     path:'/cms/page/edit/:pageId',// 页面的路径
            //     name:'编辑页面',// 页面的名称
            //     component: page_edit,// 组件
            //     hidden:true // 是否显示
            // }
        // ]
    },

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
