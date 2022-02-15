<template>
	<div class="comments">
		<NewCoommentForm />
		<CommentsList :comments="comments"/>
	</div>
</template>
<script>
	import {mapActions, mapGetters} from 'vuex'
	import CommentsList from '@/components/comments/CommentsList'
	import NewCoommentForm from '@/components/comments/NewCoommentForm'

	export default {
		name: 'PPComments',
		components: {
			CommentsList,
			NewCoommentForm,
		},
		methods: {
			...mapActions({
				uploadComments: 'posts/comments/uploadCommentsByPostId'
			})
		},
		computed: {
			...mapGetters({
				comments: 'posts/comments/getComments'
			})
		},
		created() {
			this.uploadComments(this.$route.params.id)
		}
	}
</script>
<style scoped>
	.comments {
		border-radius: 10px;
		border: 3px solid blue;
	}
</style>
