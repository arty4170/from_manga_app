<template>
	<div class="modal-mask">
		<div class="modal-wrapper" v-on:click="$emit('close')">
			<div class="modal-container" v-on:click.stop="">
				<form action="post">
					<my-input name="search-input" v-model="inputValue" @keyup.enter="submit" class="search-input"></my-input>
					<div class="btns">
						<my-radio :options="['title','publishing','translators','author']" v-model="choice"></my-radio>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'SearchForm',
		data() {
			return {
				choice: '',
				inputValue: ''
			}
		},
		methods: {
			submit(event) {
				event.preventDefault()
				this.$emit('close')
			},
			close() {
				console.log('close-1')
				this.$emit('close')
			}
		}
	}
</script>
<style scoped>
	.modal-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #000;
		display: table;
		transition: opacity 0.3s ease;
		opacity: 0.9;
	}

	.modal-wrapper {
		display: table-cell;
		vertical-align: middle;
	}

	.modal-container {
		width: 500px;
		margin: 0px auto;
		padding: 20px 30px;
		background-color: #fff;
		border-radius: 2px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
		transition: all 0.3s ease;
		opacity: 1;
	}
	.btns {
		background-color: #fff;
	}
	.search-input {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
</style>