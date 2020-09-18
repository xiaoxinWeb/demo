// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '../src/assets/less/animation.less'
import less from 'less'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Loading from './loading'
import animated from 'animate.css'
import axios from 'axios'
import './assets/icon/iconfont.css'
import './assets/less/media.less'
import './assets/less/base.less'
import 'element-ui/lib/theme-chalk/display.css'
import formValidation from './assets/js/formValidation'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 调用css数字动画
import run from './assets/js/run.js'
import VueAnimateNumber from 'vue-animate-number'
import TweenLite from 'gsap'
// 调用高德地图
import VueAMap from 'vue-amap';
Vue.prototype.run = run
Vue.prototype.formValidation = formValidation
Vue.config.productionTip = false
Vue.use(less)
Vue.use(animated)
Vue.use(ElementUI)
Vue.use(Loading)
Vue.use(TweenLite)
Vue.use(VueAnimateNumber)
Vue.use(VueAMap)
    // 调用高德地图方法
VueAMap.initAMapApiLoader({
        key: '686e7bad15c1a3b8ea9cf6333a9735d5',
        plugin: [

            'AMap.Autocomplete',

                'AMap.PlaceSearch',

                'AMap.Scale',

                'AMap.OverView',

                'AMap.ToolBar',

                'AMap.MapType',

                'AMap.PolyEditor',

                'AMap.CircleEditor',

                'AMap.Geolocation'

             
        ],

          // 默认高德 sdk 版本为 1.4.4

         v: '1.4.4'
    })
    // 进度条加载
NProgress.configure({
    easing: 'ease', // 动画方式    
    speed: 500, // 递增进度条的速度    
    showSpinner: false, // 是否显示加载ico    
    trickleSpeed: 200, // 自动递增间隔    
    minimum: 0.3 // 初始化时的最小百分比
})
router.beforeEach((to, from, next) => {
    // 每次切换页面时，调用进度条
    NProgress.start();

    // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
    next();
});
router.afterEach(() => {
        // 在即将进入新的页面组件前，关闭掉进度条
        NProgress.done()
    })
    /* eslint-disable no-new */
Vue.prototype.$axios = axios
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})