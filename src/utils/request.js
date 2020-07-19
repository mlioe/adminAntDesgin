import axios from 'axios';
import configUrl from "./config.js";
const request = {}

const instance = axios.create({
	timeout: 5000
})

//全局拦截
// 添加请求拦截器,所有的网络请求都会先走这个方法，我们可以在它里面为请求添加一些自定义的内容
instance.interceptors.request.use(
	function(config) {
		// console.group('全局请求拦截')
		// console.log(config)
		// console.groupEnd()
		// config.headers.token = '123456'
		return config
	},
	function(err) {
		return Promise.reject(err)
	}
)

//全局应拦截
//所有网络请求返回时都会执行此方法
//此处可以根据服务器的返回状态码做响应的处理
//404 404 500
instance.interceptors.response.use(
	function(config) {
		// console.group('全局响应拦截')
		// console.log(config)
		// console.groupEnd()
		return config
	},
	function(err) {
		return Promise.reject(err)
	}
)


request.globalRequest = (url, method, data, headers) => {
	let result = ''
	if(method === 'GET'){
		result = instance.get(configUrl+url, {params: {...data}})
	}else if(method === 'POST'){
		result = instance.post(configUrl+url,data)
	}else if(method === 'DELETE'){
		result = instance.delete(configUrl+url,{params: {...data}})
	}else if(method === 'PUT'){
		result = instance.put(configUrl+url,data)
	}
	return result
}
export default request
