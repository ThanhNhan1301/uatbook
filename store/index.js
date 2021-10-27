import { configureStore } from '@reduxjs/toolkit'
import userAction from './actions/user'
import productsAction from './actions/products'
import ordersAction from './actions/orders'

const store = configureStore({
    reducer: {
        user: userAction,
        products: productsAction,
        orders: ordersAction,
    },
})

export default store
