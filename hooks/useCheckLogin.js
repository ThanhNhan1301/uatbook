import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/dist/client/router'

export default function useCheckLogin() {
    const router = useRouter()
    useEffect(() => {
        if (!window.localStorage.getItem('user')) {
            router.push('/login')
        }
    })
}
