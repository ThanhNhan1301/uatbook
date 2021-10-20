import { useForm } from 'react-hook-form'
import { useRouter } from 'next/dist/client/router'
import { addUser } from '../actions/user'
import { useDispatch } from 'react-redux'

export default function Login() {
    const router = useRouter()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const onSubmit = ({ name, password }) => {
        const authoriration = async () => {
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
                dispatch(addUser(name))
                router.push('/')
            }
        }
        authoriration()
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
                <div className='mt-6 w-full'>
                    <input
                        className='w-full py-2 bg-green-500 rounded-md text-white font-semibold cursor-pointer '
                        type='submit'
                        value='Login'
                    />
                </div>
            </form>
        </div>
    )
}
