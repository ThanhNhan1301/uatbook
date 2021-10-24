import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { async } from 'regenerator-runtime'
import { createBook, getBooks } from '../../axios/callApi/book'
import TextInput from '../../components/Form/TextInput'
import Loading from '../../components/Loading'
import Modal from '../../components/Modal'
import useCheckLogin from '../../hooks/useCheckLogin'
import { addProducts } from '../../store/actions/products'

export default function CreateBook() {
    const dispatch = useDispatch()
    const initialModal = {
        show: false,
        title: '',
        type: 'success',
    }
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(initialModal)
    useCheckLogin()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (value) => {
        const postBook = async (value) => {
            setLoading(true)
            await createBook(value)
                .then(async () => {
                    await getBooks().then((result) => {
                        dispatch(addProducts(result.data))
                        setModal({ show: true, title: 'Create Book Successfully', type: 'success' })
                        setLoading(false)
                    })
                })
                .catch(() => {
                    setLoading(false)
                    setModal({ show: true, title: 'Create Book Error', type: 'error' })
                })
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
                <Modal
                    {...modal}
                    onClick={() => {
                        reset()
                        setModal(initialModal)
                    }}
                />
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
