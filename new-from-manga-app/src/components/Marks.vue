<template>
	<div class="wrapper">
		<div class="button">button</div>
		<div class="marks">
			<MarksElement/>
		</div>
	</div>
</template>
<script>
	import MarksElement from '@/components/MarksElement'
	
	export default {
		name: Marks,
		components: {
			MarksElement,
		}
	}
</script>