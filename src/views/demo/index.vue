<template>
	<div>demo</div>
</template>

<script>
import axios from 'axios';
export default {
	created() {
		// console.log('demo')
		axios.get('/api/japi/toh').then(e => {
			// console.log(e)
		});
	}
};
</script>

<style></style>
