import axiosClient from '../axiosClient'

export async function checkInvalid(value) {
    return await axiosClient.get('/qrcode', { params: { value } })
}

export async function updateypeQrcode(data) {
    return await axiosClient.put('/qrcode', data)
}

export async function createQrcode(data) {
    return await axiosClient.post('/qrcode', data)
}

export async function getAllQRCodes() {
    return await axiosClient.get('/getQrCode')
}
