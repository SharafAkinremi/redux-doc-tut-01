import { configureStore } from '@reduxjs/toolkit'

import postReducer from '../feature/posts/postsSlice'
import usersReducer from '../feature/users/usersSlice'

export default configureStore({
  reducer: {
    posts: postReducer,
    users: usersReducer,
  },
})
