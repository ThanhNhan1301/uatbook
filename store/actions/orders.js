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
                return (state = [{ title, data: [], status: 'active', id }])
            } else {
                const isValid = state.some((item) => {
                    return item.title.toLowerCase() === title.toLowerCase()
                })
                if (isValid) return
                state.push({ title, data: [], status: 'active', id })
            }
        },
        updateOrder: (state, action) => {
            let { indexOrder, itemData, type } = action.payload
            if ((indexOrder && itemData) || (indexOrder === 0 && itemData)) {
                const order = { ...state[indexOrder] }
                let listData = order.data
                if (listData.length === 0) {
                    listData = [{ ...itemData, qty: 1 }]
                } else {
                    let flag = false
                    listData.some((data, idx) => {
                        if (data._id === itemData._id) {
                            flag = idx + 1
                        }
                        return data._id === itemData._id
                    })
                    if (flag) {
                        if (!type || !Boolean(type.trim())) {
                            listData[flag - 1].qty = 1
                        } else {
                            if (Number.isInteger(Number.parseInt(type))) {
                                listData[flag - 1].qty = Number.parseInt(type)
                            } else {
                                switch (type) {
                                    case '+':
                                        listData[flag - 1].qty += 1
                                        break
                                    case '-':
                                        if (listData[flag - 1].qty - 1 === 0) {
                                            listData.splice(flag - 1, 1)
                                        } else {
                                            listData[flag - 1].qty -= 1
                                        }
                                        break
                                    default:
                                        listData[flag - 1].qty += 1
                                        break
                                }
                            }
                        }
                    } else {
                        listData.push({ ...itemData, qty: 1 })
                    }
                }
                state[indexOrder].data = listData
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

export const { createOrder, updateOrder, deleteOrder, deleteItemOrder } = slice.actions

export default slice.reducer
