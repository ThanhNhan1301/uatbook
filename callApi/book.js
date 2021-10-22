import axiosClient from '../axios/axiosClient'

export async function createBook(data) {
    return await axiosClient.post('/book', data)
}
