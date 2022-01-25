import { createRouter, createWebHistory } from 'vue-router'
import PostList from '@/views/PostList.vue'
import NewPostForm from '@/views/NewPostForm.vue'
import PostPage from '@/views/PostPage.vue'
import PPInfo from '@/views/PPInfo.vue'
import PPChapters from '@/views/PPChapters.vue'
import PPComments from '@/views/PPComments.vue'
import NewUserForm from '@/views/NewUserForm'
import UserForm from '@/views/UserForm'

const routes = [
  {
    path: '/',
    name: 'PostList',
    component: PostList
  },
  {
    path: '/:id',
    name: 'PostPage',
    component: PostPage,
    children: [
      {
        path: 'info',
        component: PPInfo
      },
      {
        path: 'chapters',
        component: PPChapters
      },
      {
        path: 'comments',
        component: PPComments
      }
    ]
  },
  {
    path: '/add_post',
    name: 'NewPostForm',
    component: NewPostForm
  },
  {
    path: '/new_user_form',
    name: 'NewUserForm',
    component: NewUserForm
  },
  {
    path: '/user_form',
    name: 'UserForm',
    component: UserForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
