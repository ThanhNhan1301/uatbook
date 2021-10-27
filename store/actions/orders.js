import { createSlice } from '@reduxjs/toolkit'

// [{
//     id,
//     title,
//     data: [],
//     status: 'active'
// }]

const slice = createSlice({
    name: 'orders',
    initialState: [],
    reducers: {
        createOrder: (state, action) => {
            const { title, id } = action.payload
            if (state.length === 0) {
                state.push({ title, data: [], status: 'active', id })
            } else {
                const isValid = state.every((item) => {
                    return item.title.toLowerCase() === title.toLowerCase()
                })
                if (isValid) return
                state.push({ title, data: [], status: 'active', id })
            }
        },
        addOrder: (state, action) => {
            const { data, idx, order, type } = action.payload
            if ((data && order && idx === 0) || (idx && order && data)) {
                if (order.data.length === 0) {
                    const newOrder = { ...order, data: [{ ...data, qty: 1 }] }
                    state.splice(idx, 1, newOrder)
                } else {
                    let flag = null
                    order.data.some((item, idx) => {
                        item._id == data._id ? (flag = idx + 1) : false
                        return item._id == data._id
                    })
                    if (flag) {
                        let newOrder = { ...order }
                        const listData = [...newOrder.data]
                        const newItem = { ...listData[flag - 1] }
                        if (type === '+') {
                            newItem.qty += 1
                        } else {
                            newItem.qty -= 1
                        }
                        if (newItem.qty === 0) {
                            listData.splice(flag - 1, 1)
                        } else {
                            listData.splice(flag - 1, 1, newItem)
                        }
                        newOrder.data = listData
                        state.splice(idx, 1, newOrder)
                    } else {
                        const newOrder = {
                            ...order,
                            data: [...order.data, { ...data, qty: 1 }],
                        }
                        state.splice(idx, 1, newOrder)
                    }
                }
            }
        },
        deleteOrder: (state, action) => {
            state.splice(action.payload, 1)
        },
        deleteItemOrder: (state, action) => {
            const { order, item } = action.payload
            state[order].data.splice(item, 1)
        },
    },
})

export const { createOrder, addOrder, deleteOrder, deleteItemOrder } = slice.actions

export default slice.reducer
