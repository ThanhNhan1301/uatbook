import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'user',
    initialState: {
        isLogin: false,
        current: '',
    },
    reducers: {
        addUser: (state, action) => {
            if (!action.payload) return
            state.isLogin = true
            state.current = action.payload
        },
        removeUser: (state) => {
            state.isLogin = false
            state.current = ''
        },
    },
})

export const { addUser, removeUser } = slice.actions

export default slice.reducer
