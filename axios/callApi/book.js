import { async } from 'regenerator-runtime'
import axiosClient from '../axiosClient'

export async function createBook(data) {
    return await axiosClient.post('/book', data)
}

export async function getBooks() {
    return await axiosClient.get('/book')
}

export async function getBook(_id) {
    return await axiosClient.get('/book', { params: { _id } })
}

export async function updateBook(id, data) {
    return await axiosClient.put('/book', { id, data })
}

export async function deleteBook(id) {
    return await axiosClient.delete('/book', { params: { id } })
}
