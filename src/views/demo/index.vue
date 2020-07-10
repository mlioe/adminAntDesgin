<template>
	<div>demo
	
		<button @click="Click404">去404页面</button>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	created() {
		// console.log('demo')
		axios.get('/api/japi/toh').then(e => {
			// console.log(e)
		});
		
	},
	methods:{
		Click404(){
			this.$router.push('/demo2555')
		}
	}
};
</script>

<style></style>
