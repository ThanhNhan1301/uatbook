import useCheckLogin from '../../hooks/useCheckLogin'
import { useForm } from 'react-hook-form'
import TextInput from '../../components/Form/TextInput'
import { createBook } from '../../callApi/book'
import { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function CreateBook() {
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState({
        show: false,
        title: '',
    })
    useCheckLogin()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (value) => {
        const postBook = async (value) => {
            try {
                setLoading(true)
                const result = await createBook(value)
                if (result) {
                    setModal({ show: true, title: 'Create Book Successfully' })
                }
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }
        postBook(value)
    }
    return (
        <div className='w-[90%] m-10 mx-auto max-w-[400px] min-h-screen'>
            {modal.show && (
                <div className='fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-yellow-600 py-3 w-full max-w-[400px] text-white rounded-lg text-center'>
                    <div className='text-center p-3'>{modal.title}</div>
                    <button
                        className='px-8 py-1 bg-black uppercase rounded-md opacity-90 active:opacity-100'
                        onClick={() => {
                            reset()
                            setModal({ show: false, title: '' })
                        }}
                    >
                        Close
                    </button>
                </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                <TextInput
                    autoComplete='off'
                    title='Tên sách'
                    placeholder='VD: THÉP ĐÃ TÔI THẾ ĐẤY'
                    register={register}
                    name='name'
                    type='text'
                    required={true}
                />
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
                <TextInput
                    autoComplete='off'
                    title='Giá'
                    register={register}
                    name='g'
                    type='number'
                    defaultValue={0}
                />
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
                <button
                    type='submit'
                    className='w-full min-w-[200px] block mt-3 mx-auto py-2 bg-green-900 text-white outline-none rounded-md opacity-90 active:opacity-100'
                    disabled={loading}
                >
                    {loading && (
                        <AiOutlineLoading3Quarters className='inline-block mr-2 animate-spin' />
                    )}
                    <span>Submit</span>
                </button>
            </form>
        </div>
    )
}
