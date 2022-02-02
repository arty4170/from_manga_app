export default {
	addPost(context, post) {
		context.commit('addPost', post)
	},
	deletePost(context, postId) {
		context.commit('deletePost', postId)
	},
}