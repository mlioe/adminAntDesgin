<template>
	<div class="box">
		<!-- <menu-item :route="demoMenuRotes" :isCollapse="childrenIsCollapse" :style="!isCollapse?'width: 220px;':''"></menu-item> -->
		<div class="ImgBox">
			<img src="../../assets/logo.png" alt="" class="Img" />
			<span v-show="!childrenIsCollapse">logo</span>
		</div>
		<menu-item :route="menuRoutes" :isCollapse="childrenIsCollapse" :style="!isCollapse ? 'width: 220px;' : ''"></menu-item>
	</div>
</template>

<script>
import routes from './demoRoutes.js';
import menuItem from './menuItem.vue';
export default {
	name: 'menuList',
	components: {
		menuItem
	},
	props: {
		isCollapse: {
			default: false,
			type: Boolean
		}
	},
	data() {
		return {
			demoMenuRotes: [],
			childrenIsCollapse: null,
			menuRoutes: [],
			screenWidth: document.body.clientWidth
		};
	},
	created() {
		let arr = [];
		this.demoMenuRotes = routes;
		this.childrenIsCollapse = this.components;
		this.menuRoutes = this.$router.options.routes[0].children;
	},
	methods: {
		toggleCollapsed() {
			this.isCollapse = !this.isCollapse;
		}
	},
	mounted() {
		const that = this;
		window.onresize = () => {
			return (() => {
				window.screenWidth = document.body.clientWidth;
				that.screenWidth = window.screenWidth;
			})();
		};
	},
	watch: {
		$route() {
			// this.routerChange();
		},
		isCollapse(val) {
			this.childrenIsCollapse = val;
		},
		screenWidth(val) {
			//如果要做h5导航菜单，则要通过这里判断页面大小，方便以后拖拽使用
			// console.log(val)
			// 为了避免频繁触发resize函数导致页面卡顿，使用定时器
			if (!this.timer) {
				this.screenWidth = val;
				this.timer = true;
				let that = this;
				setTimeout(() => {
					// 打印screenWidth变化的值
					// console.log(that.screenWidth);
					this.timer = false;
				}, 400);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.box {
	.ImgBox {
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		width: 100%;
	}
	.Img {
		width: 30px;
		height: 30px;
	}
	.ImgBox span {
		padding-left: 30px;
	}
}
</style>
