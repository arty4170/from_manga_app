<template>
	<div class="mark">
		<div class="title">title</div>
		<div class="mark">mark</div>
	</div>
</template>
<script>
	export default {
		name: 'MarksElement',
	}
</script>
<style scoped>
	.mark {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 15px;
	}
</style>