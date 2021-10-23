import axiosClient from '../axiosClient'

export async function search(q) {
    return await axiosClient.get('/search', {
        params: {
            q,
        },
    })
}
