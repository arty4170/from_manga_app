import {set, ref, getDatabase} from 'firebase/database'
import {ref as refStorage, getStorage, uploadBytes} from 'firebase/storage'

function getId() {
	return new Date().getTime()
}

export default {
	addPost(context, post) {
		const database = getDatabase()
		set(ref(database, `/posts/${getId()}`), post)
	},
	deletePost(context, postId) {
		context.commit('deletePost', postId)
	},
	clearPostList(context) {
		context.commit('clearPostList')
	},
	uploadCover(context, data) {
		const storage = getStorage()
		const storageRef = refStorage(storage, data.name)

		uploadBytes(storageRef, data.file).then((snapshot) => {
			console.log('uploaded cover')
		}).catch((error) => {
			console.log(error.code)
		})
	}
}