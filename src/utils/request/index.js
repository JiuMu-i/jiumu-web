import axios from 'axios'
import { useEnv } from '@/utils/hooks/useEnv'

const { VITE_BASE_API  } = useEnv()

const service = axios.create({
  baseURL: VITE_BASE_API,
  timeout: 10 * 1000,
  headers: { "Content-Type": "application/json;charset=UTF-8" }
})

// 请求拦截器
service.interceptors.request.use((config) => {
  return config
}, (error) => {
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error.response)
})

const request = {
  request: (method = 'GET', url, data) => new Promise((resolve, reject) => {
    service({
      method,
      url,
      ...data
    }).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  }),
  get: (url, data) => request.request('GET', url, {
    params: data
  }),
  post: (url, data) => request.request('POST', url, {
    data
  }),
  put: (url, data) => request.request('PUT', url, {
    data
  }),
  delete: (url, data) => request.request('DELETE', url, {
    params: data
  })
}

export default request