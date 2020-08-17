import { configureStore } from '@reduxjs/toolkit'

import postReducer from '../feature/posts/postsSlice'
import usersReducer from '../feature/users/usersSlice'

import notificationsReducer from '../features/notifications/notificationsSlice'

export default configureStore({
  reducer: {
    posts: postReducer,
    users: usersReducer,
    notifications: notificationsReducer,
  },
})
