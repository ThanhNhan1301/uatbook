import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'user',
    initialState: {
        name: '',
    },
    reducers: {
        addUser: (state, action) => {
            state.name = action.payload.name
        },
        removeUser: (state) => {
            state.name = ''
        },
    },
})

export const { addUser, removeUser } = slice.actions

export default slice.reducer
