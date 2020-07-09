<template>
	<div class="box">
		<menu-item :route="demoMenuRotes" :isCollapse="childrenIsCollapse" :style="!isCollapse?'width: 220px;':''"></menu-item>
		<menu-item :route="demoRoutes" :isCollapse="childrenIsCollapse" :style="!isCollapse?'width: 220px;':''"></menu-item>
	</div>
</template>

<script>
import routes from './demoRoutes.js'
import menuItem from './menuItem.vue';
export default {
	name: 'menuList',
	components: {
		menuItem
	},
	props: {
		isCollapse: {
			default: false,
			type: Boolean,
		}
	},
	data() {
		return {
			demoMenuRotes: [],
			childrenIsCollapse:null,
			demoRoutes:[]
		};
	},
	created() {
		let arr = [];
		this.demoMenuRotes = routes;
		this.childrenIsCollapse = this.components
		this.demoRoutes = this.$router.options.routes[0].children
	},
	methods: {
		toggleCollapsed() {
			this.isCollapse = !this.isCollapse;
		}
	},
	watch: {
		$route() {
			// this.routerChange();
		},
		isCollapse(val) {
			this.childrenIsCollapse = val
		}
	}
};
</script>

<style>
.box {
}
</style>
