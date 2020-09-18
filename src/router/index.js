import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: () =>
                import ('../components/home.vue'),
            meta: { title: "登录页" }
        },
        {
            path: '/index',
            name: 'index',
            component: resolve =>
                require(['../components/index/index.vue'], resolve),
            meta: { title: '首页' },
            children: [{
                    path: '/',
                    name: 'desktop',
                    component: resolve =>
                        require(['../views/management/desktop.vue'], resolve),
                    meta: { title: "我的桌面" }
                },
                {
                    path: '/canvas',
                    name: 'canvas',
                    component: resolve =>
                        require(['../views/management/canvas.vue'], resolve),
                    meta: { title: '首页' }
                }
            ]

        },


    ]
})
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title == undefined ? '后台管理系统' : to.meta.title;
    next();
})
export default router