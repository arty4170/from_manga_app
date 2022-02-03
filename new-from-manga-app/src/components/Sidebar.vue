<template>
	<div class="sidebar">
		<div class="button" @click="clickSidebar">button</div>
		<form>
			<div>
				<my-select v-model="choice.genre">Жанры</my-select>
			</div>
			<div>
				<my-select v-model="choice.date">Год выпуска</my-select>
			</div>
			<div>
				<my-select v-model="choice.title_status">Статус тайтла</my-select>
			</div>
			<div>
				<my-select v-model="choice.translation_status">Статус перевода</my-select>
			</div>
			<div class="btns">
				<button type="reset">Сбросить</button>
				<button type="submit" @click.prevent="$emit('filterChosen', choice)">Подтвердить</button>
			</div>
		</form>
	</div>
</template>
<script>
	export default {
		name: 'Sidebar',
		data() {
			return {
				choice: {
					genre: '',
					date: '',
					title_status: '',
					translation_status: ''
				},
				sideBarClass: 'sidebar'
			}
		},
		methods: {
			clickSidebar() {

			}
		}
	}
</script>
<style scoped>
	.sidebar form {
		display: none;
	}
	.sidebar-active {
		display: block;
	}
</style>