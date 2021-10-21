import { useForm } from 'react-hook-form'
import { useRouter } from 'next/dist/client/router'
import { addUser } from '../actions/user'
import { useDispatch } from 'react-redux'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { authorization } from '../callApi/login'

export default function Login() {
    const router = useRouter()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        setLoading(true)
        const result = await authorization(data)
        setLoading(false)
        if (result.valid) {
            dispatch(addUser(result))
            router.push('/')
        } else {
            dispatch(addUser({ name: '' }))
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
