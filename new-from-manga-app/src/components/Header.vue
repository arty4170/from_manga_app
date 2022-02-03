<template>
	<header>
		<div class="logo" @click="$router.push('/posts')"><img src="@/assets/logo.png"></div>
		<div class="btns">
			<Button :src1="searchImg" @click="showSearch = true"/>
			<Button :src1="newPostImg" @click="$router.push('/add_post')" v-if="isAuth"/>
			<component :is="shownComponent" @logOut="clickLogOut" :src1="userImg" @click="clickUser"></component>
		</div>
		<SearchForm v-if="showSearch" @close="showSearch=false"/>
	</header>
</template>
<script>
	import Button from '@/components/Button.vue'
	import SearchForm from '@/components/SearchForm'
	import UserMenu from '@/components/UserMenu'
	import {mapGetters, mapActions} from 'vuex'


	export default {
		name: 'Header',
		components: {
			Button,
			SearchForm,
			UserMenu,
		},
		data() {
			return {
				newPostImg: require('@/assets/pen.png'),
				searchImg: require('@/assets/search.jpg'),
				userImg: require('@/assets/user.png'),
				showSearch: false,
			}
		},
		computed: {
			...mapGetters({
				isAuth: 'users/isAuth',
			}),
			shownComponent() {
				return !(this.isAuth) ? Button : UserMenu
			}
		},
		methods: {
			...mapActions({
				logOut: 'users/logOut'
			}),
			clickUser() {
				if (this.shownComponent === Button) {
					this.$router.push('/user_form')
				}
			},
			clickLogOut() {
				this.logOut()
				this.$router.push('/posts')
			}
		}
	}
</script>
<style scoped>
	header{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		border-radius: 10px;
		border: 3px solid blue;
		width: 100%;
	}
	.logo{
		max-height: 100px;
		max-width: 200px;
		cursor: pointer;
	}
	.logo img{
		height: 100%;
	}
	.btns{
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 15px;
	}
</style>
