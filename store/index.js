import { configureStore } from '@reduxjs/toolkit'
import userAction from '../actions/user'
import productsAction from '../actions/products'

const store = configureStore({
    reducer: {
        userCurrent: userAction,
        products: productsAction,
    },
})

export default store
