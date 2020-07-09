import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
Vue.use(VueRouter)

  const routes = [
  
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index/index.vue'),
	meta:{
		title:'首页'
	},
	redirect:'/demo',
	children:[
		{
			path:'/demo',
			name:'Demo',
			component: () => import('../views/demo/index.vue'),
			meta:{title:'demo',hasSubMenu:false,icon:'home'}
		},
		{
			path:'/demo2',
			name:'Demo2',
			component: () => import('../views/demo2/index.vue'),
			meta:{title:'demo2',hasSubMenu:false,icon:'home'}
		}
	]
  }
]

//解决相同路由情况下跳转报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
