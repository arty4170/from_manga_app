<template>
	<div>
		<label v-for="option in options" :key="option">
			{{option}}
			<input type="radio" id="radio" name="radio-value" :value="option" v-model="radioValue">
		</label>
	</div>
</template>
<script>
	export default {
		name: 'MyRadio',
		props: {
			options: {
				type: Array
			},
			modelValue: String,
		},
		data() {
			return {
				radioValue: ''
			}
		},
		watch: {
			radioValue() {
				this.$emit('update:modelValue', this.radioValue)
			}
		}
	}
</script>