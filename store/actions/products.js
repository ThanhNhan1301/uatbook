import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'products',
    initialState: {
        data: [],
    },
    reducers: {
        addProducts: (state, action) => {
            state.data = action.payload
        },
    },
})

export const { addProducts } = slice.actions

export default slice.reducer
