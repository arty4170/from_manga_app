<template>
	<div class="container">
		<form id="add-post-form" action="post" @submit="addPost">
			<ul>
				<li>
					<div>Обложка</div>
					<input type="file" @change="showPreview" class="inputCover">
					<img src="" alt="" class="preview">
				</li>
				<li>
					<my-input type="text" name="origtitle" v-model="post.origtitle">
					<div class="origtitle">Оригинальное название</div>
					</my-input>
				</li>
				<li>
					<my-input v-model="post.title">
						<div class="title">Название на русском</div>
					</my-input>
				</li>
				<li>
					<my-input type="date" name="date" v-model="post.date">
						<div>Год выпуска</div>
					</my-input>
				</li>
				<li>
					<my-input name="author" :add_input_button="true" v-model="post.authors">
						<div>Автор(ы)</div>
					</my-input>
				</li>
				<li>
					<my-input name="publishing" v-model="post.publishing">
						<div>Издатель</div>
					</my-input>
				</li>
				<li>
					<my-input name="genre" :add_input_button="true" v-model="post.genre">
						<div>Жанры</div>
					</my-input>
				</li>
				<li>
					<my-input name="translator" :add_input_button="true" v-model="post.translators">
						<div>Переводчик(и)</div>
					</my-input>
				</li>
				<li>
					<my-select v-model="post.title_status" :options="{on: 'Онгоинг',end: 'Завершён',anons: 'Анонс', paused: 'Приостановлен', stopped: 'Выпуск прекращён'}">
						<div>Статус тайтла</div>
					</my-select>
				</li>
				<li>
					<div>Статус перевода</div>
					<my-select v-model="post.translation_status" :options="{on: 'Продолжается',end: 'Завершён', paused: 'Приостановлен', stopped: 'Перевод прекращён'}"></my-select>
				</li>
				<li>
					<my-textarea v-model="post.description">
						<div>Описание</div>
					</my-textarea>
				</li>
			</ul>
			<div class="btns">
				<button type="reset">Сбросить</button>
				<button type="submit" @click.prevent="onSubmit">Сохранить</button>
			</div>
		</form>
		</div>
</template>
<script>
	import { mapActions } from 'vuex';

	export default {
		name: 'NewPost',
		methods: {
			add_input(name) {

			},
			...mapActions({
				addPost: 'posts/addPost',
				uploadCover: 'posts/uploadCover'
			}),
			onSubmit() {
				this.uploadCover({
					name: this.post.cover,
					file: this.cover
				})
				this.addPost(this.post);
				this.$router.push('/');
			},
			showPreview() {
				const input = document.querySelector('.inputCover')
				this.post.cover = `postCovers/${input.files[0].name}`
				this.file = URL.createObjectURL(input.files[0])
			}
		},
		data() {
			return {
				post: {
					id: '',
					cover: '',
					origtitle: '',
					title: '',
					date: '',
					authors: '',
					publishing: '',
					genre: '',
					translators: '',
					title_status: '',
					translation_status: '',
					description: '',
				},
				file: {}
			}
		},
		mounted() {
			this.post.id = `${new Date().getTime()}`
		}
	}
</script>
<style scoped>
	form {
		border: 3px solid blue;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
