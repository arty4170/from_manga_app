<template>
	<div :class="name">
		<slot></slot>
		<div class="input">
			<input :type="type" v-model="inputValue" :name="name">
			<div v-if="add_input_button" @click="add_input('author')">Добавить</div>
		</div>
		<div class="nv-input" style="display: none;"></div>
	</div>
</template>
<script>
	export default {
		name: 'MyInput',
		data() {
			return {
				inputValue: '',
				inputsNumber: '1',
			}
		},
		props: {
			type: {
				type: String,
				default: 'text'
			},
			add_input_button: {
				type: Boolean,
				default: false
			},
			name: String,
			modelValue: String,
		},
		methods: {
			add_input(name) {

			}
		},
		watch: {
			inputValue() {
				this.$emit('update:modelValue', this.inputValue)
			}
		}
	}
</script>