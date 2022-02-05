import {getStorage, ref, getDownloadURL} from 'firebase/storage'

function getPostCover(coverSrc) {
	console.log(typeof (getDownloadURL))
	const storage = getStorage()
	const src = ref(storage, coverSrc)
	let a = ''
	getDownloadURL(src).then((url) => {
		a = url
		console.log(a)
	})
	console.log(a)
	return a
}

export default {
	getPostById(state) {
		return (postId) => {
			for (let i = 0; i < state.posts.length; ++i) {
				const el = state.posts[i]
				if (el.id === postId) {
					return el
				}
			}
		}
	},
	getShortPosts(state) {
		return (startNumber, endNumber = state.posts.length) => {
			const shortPosts = []
			for (let i = startNumber; i < endNumber; ++i) {
				const el = state.posts[i]
				shortPosts[i] = {
					id: el.id,
					title: el.title,
					description: el.description,
					author: el.author,
					cover: getPostCover(el.cover),
					date: el.date,
				}
			}
			return shortPosts
		}
	}
}