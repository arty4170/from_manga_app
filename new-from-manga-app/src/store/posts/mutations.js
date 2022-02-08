import {getStorage, ref, getDownloadURL} from 'firebase/storage'

export default {
	addPost(state, post) {
		if (post.cover !== '') {
			const storage = getStorage()
			getDownloadURL(ref(storage, post.cover))
				.then((url) => {
					post.cover = url
					state.posts.push(post)
				})
				.catch((error) => {
					console.warn(error.code)
				})
			} else {
				state.posts.push(post)
			}
	},
	deletePost(state, postId) {
		for (let i = 0; i < state.posts.length; ++i) {
			const post = state.posts[i];
			if (post.id === postId) {
				state.posts.splice(i, i)
			}
		}
	},
	clearPostList(state) {
		state.posts = []
	}
}