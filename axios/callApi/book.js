import axiosClient from '../axiosClient'

export async function createBook(data) {
    return await axiosClient.post('/book', data)
}

export async function getBooks() {
    return await axiosClient.get('/book')
}

export async function deleteBook(id) {
    return await axiosClient.delete('/book', { params: { id } })
}
