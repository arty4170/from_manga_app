<template>
	<div class="my-textarea">
		<slot></slot>
		<textarea name="" id="" cols="30" rows="10" placeholder="Введите описание" v-model="description"></textarea>
	</div>
</template>
<script>
	export default {
		name: 'MyTextArea',
		data() {
			return {
				description: '',
			}
		},
		props: {
			modelValue: String,
		},
		watch: {
			description() {
				this.$emit('update:modelValue', this.description)
			}
		}
	}
</script>