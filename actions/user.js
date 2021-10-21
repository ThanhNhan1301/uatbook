import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'user',
    initialState: {
        isLogin: false,
        current: '',
        error: null,
    },
    reducers: {
        addUser: (state, action) => {
            state.isLogin = action.payload.isLogin
            state.current = action.payload.name
            state.error = action.payload.error
        },
        removeUser: (state) => {
            state.isLogin = false
            state.current = ''
            state.error = null
        },
    },
})

export const { addUser, removeUser } = slice.actions

export default slice.reducer
