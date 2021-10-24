import { createSlice } from '@reduxjs/toolkit'
import { getBooks } from '../../axios/callApi/book'

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
