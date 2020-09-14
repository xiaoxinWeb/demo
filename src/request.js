import axios from 'axios'
// 创建一个axios 实例
const service = axios.create({
        baseURL: '/static/js/',
        timeout: 2500
    })
    // 请求拦截
service.interceptors.request.use(config => {
        console.log("请求被拦截")
        return config
    }, _error => {
        return Promise.reject('请求出错')
    })
    // 响应拦截
service.interceptors.response.use(res => {
    console.log("响应拦截")
    return res
}, _error => {
    return Promise.reject('出错了')
})

export default service