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
import formValidation from './assets/js/formValidation'
Vue.prototype.formValidation = formValidation
Vue.config.productionTip = false
Vue.use(less)
Vue.use(animated)
Vue.use(ElementUI)
Vue.use(Loading)
    /* eslint-disable no-new */
Vue.prototype.$axios = axios
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})