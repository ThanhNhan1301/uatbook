import { useForm } from 'react-hook-form'
import { useRouter } from 'next/dist/client/router'
import { addUser } from '../actions/user'
import { useDispatch } from 'react-redux'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function Login() {
    const router = useRouter()
    const { error } = useSelector((state) => state.userCurrent)
    console.log(error)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState({
        loading: false,
        error: null,
    })
    const { register, handleSubmit } = useForm()
    const onSubmit = ({ name, password }) => {
        const authoriration = async () => {
            try {
                setIsLoading({
                    ...isLoading,
                    loading: true,
                })
                const res = await fetch(`${process.env.BASE_URL}/api/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    mode: 'no-cors',
                    body: JSON.stringify({ name, password }),
                })
                const result = await res.json()
                if (result.isLogin) {
                    setIsLoading({
                        ...isLoading,
                        loading: false,
                    })
                    dispatch(addUser({ name, isLogin: result.isLogin, error: result.error }))
                    router.push('/')
                } else {
                    setIsLoading({
                        ...isLoading,
                        loading: false,
                    })
                    dispatch(addUser({ name: '', isLogin: false, error: result.error }))
                }
            } catch (error) {
                setIsLoading({
                    error,
                    loading: false,
                })
            }
        }
        if (!isLoading.loading) {
            authoriration()
        }
    }
    return (
        <div className='m-auto'>
            <div className='mt-10 text-center text-3xl font-semibold text-red-600 uppercase'>
                Login &#128513; &#128516; &#128518;
            </div>
            <form
                className='w-[80%] max-w-[400px] mt-10 mx-auto p-5 border rounded-lg'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <label className='block font-semibold'>Enter Your Name</label>
                    <input
                        className='mt-2 border-[3px] rounded-md border-green-500 w-full py-1 px-4 focus:border-green-800 outline-none'
                        type='text'
                        placeholder='VD: abc123'
                        autoComplete='off'
                        {...register('name')}
                        required={true}
                    />
                </div>
                <div className='mt-5'>
                    <label className='block font-semibold'>Enter Your Password</label>
                    <input
                        className='mt-2 border-[3px] rounded-md border-green-500 w-full py-1 px-4 focus:border-green-800 outline-none'
                        type='password'
                        autoComplete='off'
                        {...register('password')}
                        required={true}
                    />
                </div>
                <p className='text-sm font-semibold text-center text-red-500 mt-3'>{error}</p>
                <div className='mt-6 w-full'>
                    <button
                        className='w-full py-2 bg-green-500 rounded-md text-white font-semibold cursor-pointer '
                        type='submit'
                    >
                        {isLoading.loading && (
                            <AiOutlineLoading3Quarters className='inline-block mr-2 animate-spin' />
                        )}
                        <span>Login</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
