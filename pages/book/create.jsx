import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { createBook } from '../../axios/callApi/book'
import TextInput from '../../components/Form/TextInput'
import Loading from '../../components/Loading'
import useCheckLogin from '../../hooks/useCheckLogin'

export default function CreateBook() {
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState({
        show: false,
        title: '',
        type: 'success',
    })
    useCheckLogin()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (value) => {
        const postBook = async (value) => {
            try {
                setLoading(true)
                const result = await createBook(value)
                if (result) {
                    setModal({ show: true, title: 'Create Book Successfully', type: 'success' })
                }
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setModal({ show: true, title: 'Create Book Successfully', type: 'error' })
            }
        }
        postBook(value)
    }
    return (
        <div className='min-h-screen'>
            <Loading show={loading} />
            <div className='mt-4 pl-4'>
                <Link href='/'>
                    <span className='py-1 px-3 bg-black text-white rounded-sm bg-opacity-90 active:bg-opacity-100 cursor-pointer'>
                        BACK
                    </span>
                </Link>
            </div>
            <h3 className='text-center mt-4 font-semibold text-2xl text-green-900'>CREATE BOOK</h3>
            <div className='w-[90%] m-4 mx-auto max-w-[400px] border rounded-lg p-4'>
                {modal.show && (
                    <div
                        className={`fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] py-3 w-full max-w-[400px] text-white rounded-lg text-center
                        ${modal.type === 'error' ? 'bg-red-600' : 'bg-yellow-600'}
                        `}
                    >
                        <div className='text-center p-3'>{modal.title}</div>
                        <button
                            className='px-8 py-1 bg-black uppercase rounded-md opacity-90 active:opacity-100'
                            onClick={() => {
                                reset()
                                setModal({ show: false, title: '', type: 'success' })
                            }}
                        >
                            Close
                        </button>
                    </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                    <div>
                        <TextInput
                            autoComplete='off'
                            title='Tên sách'
                            placeholder='VD: THÉP ĐÃ TÔI THẾ ĐẤY'
                            register={register}
                            name='name'
                            type='text'
                            required={true}
                        />
                        <div className='grid gap-4 grid-cols-2'>
                            <TextInput
                                autoComplete='off'
                                title='SL1'
                                register={register}
                                name='sl1'
                                type='number'
                                defaultValue={0}
                            />
                            <TextInput
                                autoComplete='off'
                                title='SL2'
                                register={register}
                                name='sl2'
                                type='number'
                                defaultValue={0}
                            />
                        </div>
                        <div className='grid gap-4 grid-cols-2'>
                            <TextInput
                                autoComplete='off'
                                title='VT1'
                                register={register}
                                name='vt1'
                                type='text'
                            />
                            <TextInput
                                autoComplete='off'
                                title='VT2'
                                register={register}
                                name='vt2'
                                type='text'
                            />
                        </div>

                        <div className='grid gap-4 grid-cols-2'>
                            <TextInput
                                autoComplete='off'
                                title='VT3'
                                register={register}
                                name='vt3'
                                type='text'
                            />
                            <TextInput
                                autoComplete='off'
                                title='VT4'
                                register={register}
                                name='vt4'
                                type='text'
                            />
                        </div>

                        <TextInput
                            autoComplete='off'
                            title='Giá'
                            register={register}
                            name='g'
                            type='number'
                            defaultValue={0}
                        />
                    </div>
                    <div className='mt-8'>
                        <button
                            type='submit'
                            className='w-full min-w-[200px] mx-auto py-2 bg-green-900 text-white outline-none rounded-md opacity-90 active:opacity-100'
                            disabled={loading}
                        >
                            <span>Submit</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
