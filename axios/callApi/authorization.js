import axiosClient from '../axiosClient'

export async function login(data) {
    return await axiosClient.post('/authorization', data)
}
