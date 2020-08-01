<template>
  <a-pagination v-model="current" :total="50" show-less-items @change="change"/>
</template>
<script>
export default {
  data() {
    return {
      current: 2,
    };
  },
  created(){
	if(this.$route.params.pageNumber){
		this.current = Number(this.$route.params.pageNumber)
	} 
  },
  methods:{
	  change(index){
		 this.$router.push(`/demo3/${index}`)
	  }
  },
	watch:{
		$route() {
			this.current = Number(this.$route.params.pageNumber)
		}
	}
};
</script>