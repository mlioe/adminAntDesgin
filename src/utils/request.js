import axios from 'axios';
import baseUrl from "./config.js";
const request = {}
request.globalRequest = (url, method, data, headers) => {
	return new Promise((reslove, reject) => {
		axios.get(baseUrl+url).then(res => {
			reslove(res)
		}).catch(err=>{
			reject(err)
		})
	})
}
export default request
