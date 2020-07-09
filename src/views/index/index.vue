<template>
	<div class="indexBox">
		<div class="management">
			<div class="Aside">
				<menu-list :isCollapse="isCollapse"></menu-list>
			</div>
			<div class="Main">
				<div class="Header">
					<index-header @indexHandle="indexHandle"></index-header>
					<bread-crumb></bread-crumb>
				</div>
				<div class="Content">
					<router-view />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import menuList from '../../components/index/menu.vue'
	import indexHeader from '../../components/index/header.vue'
	import breadCrumb from '../../components/index/breadCrumb.vue'
	export default{
		data(){
			return{
				isCollapse:false
			}
		},
		components:{
			menuList,indexHeader,breadCrumb
		},
		methods:{
			indexHandle(){
				this.isCollapse = !this.isCollapse
			}
		}
	}
</script>

<style scoped lang="scss">
.indexBox {
	.management {
			display: flex;
			height: 100vh;
			width: 100%;
		}
		.Aside {
			height: 100%;
			background-color: #001525;
			overflow: hidden;
		}
		.Main {
			flex: 1;
			height: 100%;
			background-color: #eeeeef;
			position: relative;
		}
		.Header {
			height: 120px;
			width: 100%;
			background-color: white;
		}
		.Content {
			position: absolute;
			top: 120px;
			bottom: 0;
			width: 100%;
			overflow: auto;
		}
		.Content::-webkit-scrollbar {
			width: 4px;
		}
		.Content::-webkit-scrollbar-thumb {
			border-radius: 5px;
			background-color:  #808080;
		}
		.Content::-moz-scrollbar {
			width: 4px;
		}
		.Content::-moz-scrollbar-thumb {
			border-radius: 5px;
			background-color: #808080;
		}
}
</style>
