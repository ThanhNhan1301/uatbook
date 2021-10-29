import Link from 'next/link'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaTimes } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { createBook, getBooks } from '../../axios/callApi/book'
import TextInput from '../../components/Form/TextInput'
import Loading from '../../components/Loading'
import Modal from '../../components/Modal'
import useCheckLogin from '../../hooks/useCheckLogin'
import { addProducts } from '../../store/actions/products'
import createBookUtil from '../../utils/createBookUtils'
import ReadFileExcel from '../../utils/readFileExcel'

export default function CreateBook() {
    const dispatch = useDispatch()
    const refChooseFile = useRef()
    const initialModal = {
        show: false,
        title: '',
        type: 'success',
    }
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(initialModal)
    const [disabled, setDisabled] = useState(false)
    const [errChangefile, setErrorChangeFile] = useState(false)
    useCheckLogin()
    const { register, handleSubmit, reset } = useForm()
    const handleOnChangeFile = (e) => {
        const fileChoose = e.target.files[0]
        if (fileChoose) {
            const listEx = ['xls', 'xlsx']
            const ex = fileChoose.name ? fileChoose.name.split('.')[1] : 'no-ex'
            if (listEx.includes(ex)) {
                setDisabled(true)
                setErrorChangeFile(false)
            } else {
                setDisabled(true)
                setErrorChangeFile(true)
            }
        }
    }
    const onSubmit = (value) => {
        const postBook = async (value) => {
            if (disabled) {
                const fileReader = refChooseFile.current.files[0]
                if (fileReader) {
                    setLoading(true)
                    try {
                        const data = await ReadFileExcel(fileReader)
                        createBookUtil(data)
                        await getBooks().then((result) => {
                            dispatch(addProducts(result.data))
                            setModal({
                                show: true,
                                title: 'Create Book Successfully',
                                type: 'success',
                            })
                            setLoading(false)
                        })
                    } catch (error) {
                        setLoading(false)
                        setModal({ show: true, title: 'Create Book Error', type: 'error' })
                    }
                }
            } else {
                setLoading(true)
                await createBook(value)
                    .then(async () => {
                        await getBooks().then((result) => {
                            dispatch(addProducts(result.data))
                            setModal({
                                show: true,
                                title: 'Create Book Successfully',
                                type: 'success',
                            })
                            setLoading(false)
                        })
                    })
                    .catch(() => {
                        setLoading(false)
                        setModal({ show: true, title: 'Create Book Error', type: 'error' })
                    })
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
            <div className='w-[90%] m-4 mx-auto max-w-[400px] border rounded-lg p-4 shadow-md bg-gray-100'>
                <Modal
                    {...modal}
                    onClick={() => {
                        refChooseFile.current.value = ''
                        setDisabled(false)
                        reset()
                        setModal(initialModal)
                    }}
                />
                <div className='text-center mt-2 mb-4 relative'>
                    <input
                        ref={refChooseFile}
                        className='outline-none bg-white px-2 py-1 border border-green-500 rounded-md shadow-md'
                        type='file'
                        onChange={handleOnChangeFile}
                    />
                    {disabled && (
                        <div
                            className='absolute top-[50%] right-3 translate-y-[-50%] text-red-600 cursor-pointer'
                            onClick={() => {
                                setErrorChangeFile(false)
                                setDisabled(false)
                                refChooseFile.current.value = ''
                            }}
                        >
                            <FaTimes />
                        </div>
                    )}
                </div>
                {errChangefile && (
                    <div className='text-center text-red-500'>The selected file is not valid</div>
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
                            disabled={disabled}
                        />
                        <div className='grid gap-4 grid-cols-2'>
                            <TextInput
                                autoComplete='off'
                                title='SL1'
                                register={register}
                                name='sl1'
                                type='number'
                                defaultValue={0}
                                disabled={disabled}
                            />
                            <TextInput
                                autoComplete='off'
                                title='SL2'
                                register={register}
                                name='sl2'
                                type='number'
                                defaultValue={0}
                                disabled={disabled}
                            />
                        </div>
                        <div className='grid gap-4 grid-cols-2'>
                            <TextInput
                                autoComplete='off'
                                title='VT1'
                                register={register}
                                name='vt1'
                                type='text'
                                disabled={disabled}
                            />
                            <TextInput
                                autoComplete='off'
                                title='VT2'
                                register={register}
                                name='vt2'
                                type='text'
                                disabled={disabled}
                            />
                        </div>

                        <div className='grid gap-4 grid-cols-2'>
                            <TextInput
                                autoComplete='off'
                                title='VT3'
                                register={register}
                                name='vt3'
                                type='text'
                                disabled={disabled}
                            />
                            <TextInput
                                autoComplete='off'
                                title='VT4'
                                register={register}
                                name='vt4'
                                type='text'
                                disabled={disabled}
                            />
                        </div>

                        <TextInput
                            autoComplete='off'
                            title='Giá'
                            register={register}
                            name='g'
                            type='number'
                            defaultValue={0}
                            disabled={disabled}
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
