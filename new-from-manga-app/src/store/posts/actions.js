import {set, ref, getDatabase} from 'firebase/database'

function getNewPostId() {
	return new Date().getTime()
}

export default {
	addPost(context, post) {
		const database = getDatabase()
		set(ref(database, `/posts/${getNewPostId()}`), post)
	},
	deletePost(context, postId) {
		context.commit('deletePost', postId)
	},
	clearPostList(context) {
		context.commit('clearPostList')
	}
}