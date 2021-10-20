import { configureStore } from '@reduxjs/toolkit'
import userAction from '../actions/user'

const store = configureStore({
    reducer: {
        user: userAction,
    },
})

export default store
