import Link from 'next/link'
import { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addUser } from '../actions/user'

export default function NavBar() {
    const { isLogin, current } = useSelector((state) => state.userCurrent)
    const [isShow, setIsShow] = useState(false)
    const dispatch = useDispatch()
    return (
        <div
            className='
                w-full max-w-7xl m-auto px-5 py-4
                bg-blue-500 text-white
                flex justify-between items-center rounded-bl-sm rounded-br-sm
            '
        >
            <div className='text-2xl font-semibold'>
                <Link href='/'>Uatbook</Link>
            </div>
            <div
                className='
                relative
            '
            >
                {isLogin && (
                    <div className='text-center relative'>
                        <div
                            className='
                                flex flex-col justify-center items-center cursor-pointer select-none 
                            '
                            onClick={() => setIsShow(!isShow)}
                        >
                            <FaUserAlt />
                            <span className='text-sm'>{current}</span>
                        </div>
                        {isShow && (
                            <div
                                className='absolute bottom-[-100%] bg-gray-400 px-3 py-1 transition-all rounded-md cursor-pointer hover:bg-green-500'
                                onClick={() => {
                                    setIsShow(!isShow)
                                    dispatch(addUser({ current: '', isLogin: false, error: null }))
                                }}
                            >
                                <span>Logout</span>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
