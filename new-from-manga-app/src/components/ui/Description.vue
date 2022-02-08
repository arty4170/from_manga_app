<template>
	<div class="description">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name: 'Description'
	}
</script>
<style scoped>
	.description {
		margin-top: 20px;
		font-size: 14px;
	}
</style>