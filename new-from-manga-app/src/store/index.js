import {createStore} from 'vuex'
import posts from './posts'
import users from './users'

export default createStore({
	modules: {
		posts: posts,
		users: users,
	},
})