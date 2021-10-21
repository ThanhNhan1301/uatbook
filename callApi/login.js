import axiosClient from '../axios/axiosClient'

export async function authorization(data) {
    return await axiosClient.post('/authorization', data)
}
