import {createStore} from 'vuex'

export default createStore({
	state() {
		return {
			posts: []
		}
	},
	mutations: {
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
	},
	actions: {
		addPost(context, post) {
			context.commit('addPost', post)
		},
		deletePost(context, postId) {
			context.commit('deletePost', postId)
		},
	}
})