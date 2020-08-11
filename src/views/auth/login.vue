<template>
	<div class="box">
		<div class="loginBox">
			<div class="left"></div>
			<div class="right"></div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	.box{
		width: 100%;
		height: 100vh;
		background-color: #e4e4e4;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.loginBox{
		width: 700px;
		height: 500px;
		background-color: white;
		.left{
			width: 350px;
			height: 500px;
			float: left;
		}
		.right{
			width: 350px;
			height: 500px;
			float: left;
			background-color: #000080;
		}
	}
</style>
