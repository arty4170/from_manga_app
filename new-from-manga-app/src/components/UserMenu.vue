<template>
	<div class="user-menu">
		<Button :src1="src1" @click="clickMenu"/>
		<div class="menu">
			<Button @click="$emit('showNotes')" :src1="notificationsSrc"/>
			<Button @click="$emit('showMarks')" :src1="marksSrc"/>
			<Button @click="$emit('showSettings')" :src1="settingsSrc"/>
			<Button @click="$emit('logOut')" src1=""/>
			fasdfaf
		</div>
	</div>
</template>
<script>
	import Button from '@/components/Button'

	export default {
		name: 'UserMenu',
		components: {
			Button,
		},
		props: {
			src1: {
				type: String,
				default: require('@/assets/user.png'),
			}
		},
		data() {
			return {
				notificationsSrc: '',
				marksSrc: '',
				settingsSrc: '',
				menuClass: 'menu',
			}
		},
		methods: {
			clickMenu() {
				const menu = document.querySelector(`.${this.menuClass}`)
				if (this.menuClass === 'menu') {
					this.menuClass = 'menu-active'
				} else if (this.menuClass === 'menu-active') {
					this.menuClass = 'menu'
				}
				console.log(menu)
				menu.className = this.menuClass
			}
		}
	}
</script>
<style scoped>
	.menu {
		display: none;
	}
	.menu-active {
		display: flex;
		flex-direction: column;
	}
</style>