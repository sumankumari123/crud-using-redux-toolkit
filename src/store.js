import { configureStore } from '@reduxjs/toolkit'
import userDetail from './reducer/createReducer'

export const store = configureStore({
  reducer: {
    app: userDetail,
  },
})