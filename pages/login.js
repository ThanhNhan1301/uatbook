import { useRouter } from 'next/dist/client/router'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { login } from '../axios/callApi/authorization'
import { getBooks } from '../axios/callApi/book'
import { addProducts } from '../store/actions/products'

export default function Login() {
    const dispatch = useDispatch()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const { register, handleSubmit } = useForm()

    const local = useRef(null)

    useEffect(() => {
        local.current = window.localStorage
    }, [])

    const onSubmit = async (data) => {
        setLoading(true)
        const result = await login(data)
        setLoading(false)
        if (result.valid) {
            if (local.current) {
                local.current.setItem('user', result.name)
            }
            const resultData = await getBooks()
            dispatch(addProducts(resultData.data))
            router.push('/')
        } else {
            setError('Username or password is incorrect')
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
                        disabled={loading}
                    >
                        {loading && (
                            <AiOutlineLoading3Quarters className='inline-block mr-2 animate-spin' />
                        )}
                        <span>Login</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
