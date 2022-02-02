export default {
	addPost(state, post) {
		state.posts.push(post)
	},
	deletePost(state, postId) {
		for (let i = 0; i < state.posts.length; ++i) {
			const post = state.posts[i];
			if (post.id === postId) {
				state.posts.splice(i, i)
			}
		}
	},
}