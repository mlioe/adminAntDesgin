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
			name:'demo',
			component: () => import('../views/demo/index.vue'),
			meta:{title:'demo',hasSubMenu:false,icon:'home'}
		},
		{
			path:'/demo2',
			name:'demo2',
			component: () => import('../views/demo2/index.vue'),
			meta:{title:'demo2',hasSubMenu:false,icon:'home'}
		},
		{
			path:'/demo3/:pageNumber?',
			name:'demo3',
			component: () => import('../views/demo3/demo3.vue'),
			meta:{title:'分页路由demo',hasSubMenu:false,icon:'home'}
		}
	]
  },{
	  path:'*',
	  name:'404',
	  component: () => import('../views/404/404.vue'),
	  meta:{title:'404'}
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
