import Link from 'next/link'
import { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'

export default function NavBar() {
    const { isLogin, current } = useSelector((state) => state.user)
    const [isShow, setIsShow] = useState(false)
    return (
        <div
            className='
                w-full max-w-7xl m-auto px-5 py-4
                bg-blue-500 text-white
                flex justify-between items-center rounded-bl-sm rounded-br-sm
            '
        >
            <div className='text-2xl font-semibold uppercase'>
                <Link href='/'>uatbook</Link>
            </div>
            <div
                className='
                relative
                
            '
            >
                {isLogin ? (
                    <span>{current}</span>
                ) : (
                    <div className='p-4 bg-gray-500 rounded-full opacity-90 active:opacity-100'>
                        <FaUserAlt />
                    </div>
                )}
            </div>
        </div>
    )
}
