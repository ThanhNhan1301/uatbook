import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/dist/client/router'

export default function useCheckLogin() {
    const router = useRouter()
    const userName = useSelector((state) => state.user.name)

    useEffect(() => {
        if (!userName) {
            router.push('/login')
        }
    })
}
