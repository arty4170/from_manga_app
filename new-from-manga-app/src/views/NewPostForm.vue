<template>
	<form action="post">
		<ul>
			<li>
				<my-input type="file" name="cover">
					<div>Обложка</div>
				</my-input>
			</li>
			<li>
				<my-input type="text" name="origtitle">
				<div class="origtitle">Оригинальное название</div>
				</my-input>
			</li>
			<li>
				<my-input>
					<div class="title">Название на 
						<my-select>
							<option value="русский">русском</option>
					<option value="украинский">украинском</option>
						</my-select>
					</div>
				</my-input>
			</li>
			<li>
				<my-input type="date" name="date">
					<div>Год выпуска</div>
				</my-input>
			</li>
			<li>
				<my-input name="author" :add_input_button="true">
					<div>Автор(ы)</div>
				</my-input>
			</li>
			<li>
				<my-input name="publishing">
					<div>Издатель</div>
				</my-input>
			</li>
			<li>
				<my-input name="genre" :add_input_button="true">
					<div>Жанры</div>
				</my-input>
			</li>
			<li><my-input name="translator" :add_input_button="true">
					<div>Переводчик(и)</div>
				</my-input>
			</li>
			<li>
				<div>Статус тайтла</div>
				<my-select></my-select>
			</li>
			<li>
				<div>Статус перевода</div>
				<my-select></my-select>
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
