<template>
	<form action="post">
		<ul>
			<li>
				<div>Обложка</div>
				<input type="file" accept="image/jpeg, image/png" name="cover">
			</li>
			<li>
				<div class="origtitle">Оригинальное название</div>
				<input type="text" name="origtitle">
			</li>
			<li>
				<div class="title">Название на 
				<select name="title-lang" id="#title-lang">
					<option value="русский">русском</option>
					<option value="украинский">украинском</option>
				</select>
				</div>
				<input type="text" name="title">
			</li>
			<li>
				<div>Год выпуска</div>
				<input type="date" name="date">
			</li>
			<li>
				<div>Автор(ы)</div>
				<input type="text" name="author">
				<div @click="add_input('author')">Добавить</div>
			</li>
			<li>
				<div>Издатель</div>
				<input type="text" name="">
			</li>
			<li>
				<div>Жанры</div>
				<input type="text" name="">
				<div @click="add_input('author')">Добавить</div>
			</li>
			<li>
				<div>Переводчик(и)</div>
				<input type="text" name="">
				<div @click="add_input('author')">Добавить</div>
			</li>
			<li>
				<div>Статус тайтла</div>
				<select name="" id=""></select>
			</li>
			<li>
				<div>Статус перевода</div>
				<select name="" id=""></select>
			</li>
			<li>
				<div>Описание</div>
				<textarea></textarea>
			</li>
		</ul>
		<div class="btns">
			<button type="reset">Сбросить</button>
			<button type="submit" @click="$router.push('/')">Сохранить</button>
		</div>
	</form>
</template>
<script>
	export default {
		name: 'NewPost',
		methods: {
			add_input(name) {

			}
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
