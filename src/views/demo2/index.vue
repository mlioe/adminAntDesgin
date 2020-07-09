<template>
  <div>
    <a-card>
		<a-card :loading="loading" title="标题">
		  whatever content
		</a-card>
		<a-button style="marginTop: 16px" @click="handleClick">
		  Toggle loading
		</a-button>
	</a-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    handleClick() {
      this.loading = !this.loading;
    },
  },
};
</script>