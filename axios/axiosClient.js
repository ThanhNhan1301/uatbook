import axios from 'axios'

const axiosClient = axios.create({
    // baseURL: `${process.env.BASE_URL}/api`,
    baseURL: 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json',
    },
})

axiosClient.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        throw error.message
    }
)

export default axiosClient
