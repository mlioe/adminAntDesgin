<template>
	<div class="box">
			<div style="flex-direction: column;display: flex;text-align: center;">
				<div>{{userName}}</div>
				<button class="btn" @click="Click404">去404页面</button>
				<button class="btn" @click="set">改名</button>
				<button class="btn" @click="actionSet">异步改名</button>
			</div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import demoJs from '../../server/demo.js'
export default {
	 computed: {
	 ...mapState(['userName'])
	 },
	created() {
		this.demoRequest()
	},
	methods:{
		...mapMutations(['setUserName']),
		...mapActions(['actionSetName']),
		Click404(){
			this.$router.push('/demo2555')
		},
		set(){
			this.setUserName('改成这样')
		},
		actionSet(){
			this.actionSetName('异步改名字')
		},
		async demoRequest(){
			const data = await demoJs.demoApi({name:'zs',age:12},{'telo':'zhangsan'}) //第一个是data,第二个参是header,一般是写死的
			console.log(data)
		}
	}
};
</script>

<style scoped>
	.box{display: flex;align-items: center;justify-content:center;height: 300px;}
	.btn{margin-top: 10px;}
</style>
