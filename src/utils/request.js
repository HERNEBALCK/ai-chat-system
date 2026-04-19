import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/router'

const service = axios.create({
    baseURL: '/api', // 请求前缀
    timeout: 5000, // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
    (config) => {
        // 发送请求之前做什么
        const token = localStorage.getItem('token')
        if(token) {
            config.headers['token'] = token
        }
        return config
    },
    // 对请求错误做什么
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    (response) => {
        // 对响应数据做什么
        const { data, config } = response
        // 处理业务状态码
        if(data.code === '200') {
            return data.data
        } else {
            if(data.code ==='-1') {
                // 处理登录过期
                if(!config.url?.includes('/login')) {
                    ElMessage.error('登录过期，请重新登录')
                    // 清除登录和用户信息
                    localStorage.removeItem('token')
                    localStorage.removeItem('userInfo')
                    window.location.href = '/auth/login'
                } else {
                    ElMessage.error(data.msg || '登录过期，请重新登录')
                    return Promise.reject('网络请求失败...')
                }
            }
        }
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default service