<template>
	<div class="my-select">
		<slot></slot>
		<select name="" v-model="selectValue">
			<option v-for="(label, value) in options" v-bind:key="value" :value="value">{{label}}</option>
		</select>
	</div>
</template>
<script>
	export default {
		name: 'MySelect',
		props: {
			options: Object,
			modelValue: String,
		},
		data() {
			return {
				selectValue: ''
			}
		},
		watch: {
			selectValue() {
				this.$emit('update:modelValue', this.selectValue)
			}
		}
	}
</script>