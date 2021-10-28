import axiosClient from '../axiosClient'

export async function save(data) {
    return await axiosClient.post('/order', data)
}

export async function getOrders() {
    return await axiosClient.get('/order')
}
