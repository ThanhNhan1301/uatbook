import { configureStore } from '@reduxjs/toolkit'
import userAction from './actions/user'
import productsAction from './actions/products'

const store = configureStore({
    reducer: {
        user: userAction,
        products: productsAction,
    },
})

export default store
