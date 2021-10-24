import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getBook, getBooks, updateBook } from '../../../axios/callApi/book'
import TextInput from '../../../components/Form/TextInput'
import Loading from '../../../components/Loading'
import Modal from '../../../components/Modal'
import router from 'next/router'
import { async } from 'regenerator-runtime'
import { useDispatch } from 'react-redux'
import { addProducts } from '../../../store/actions/products'

export default function EditBook() {
    const dispatch = useDispatch()
    const initialState = {
        name: '',
        sl1: 0,
        sl2: 0,
        vt1: '',
        vt2: '',
        vt3: '',
        vt4: '',
        g: 0,
    }
    const initialStateModal = {
        show: false,
        title: '',
        type: 'success',
    }
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(initialStateModal)
    const [dataOnSubmit, setDataOnSubmit] = useState(initialState)
    const router = useRouter()
    const { id } = router.query
    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                await getBook(id)
                    .then((result) => {
                        let data = result.data[0]
                        delete data._id
                        delete data.createdAt
                        delete data.updatedAt
                        setDataOnSubmit(data)
                    })
                    .catch((err) => console.log('error:', err))
            }
        }
        fetchData()
    }, [id])

    const handleOnChange = (e) => {
        if (!e) return
        const { target } = e
        let { value, name } = target
        if (name) {
            value = Number.parseInt(value) ? Number.parseInt(value) : value
            setDataOnSubmit({
                ...dataOnSubmit,
                [name]: value,
            })
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        await updateBook(id, dataOnSubmit)
            .then(async () => {
                await getBooks().then((result) => {
                    dispatch(addProducts(result.data))
                    setLoading(false)
                    setModal({
                        ...modal,
                        show: true,
                        title: `Updated Products Successfully`,
                    })
                })
            })
            .catch(() => {
                setModal({
                    ...modal,
                    show: true,
                    title: `Updated Products Error`,
                    type: 'error',
                })
                setLoading(false)
            })
    }
    return (
        <div>
            <Loading show={loading} />
            <Modal
                {...modal}
                onClick={() => {
                    router.push('/')
                    setModal(initialStateModal)
                }}
            />
            <div className='mt-4 pl-4'>
                <Link href='/'>
                    <span className='py-1 px-3 bg-black text-white rounded-sm bg-opacity-90 active:bg-opacity-100 cursor-pointer'>
                        BACK
                    </span>
                </Link>
            </div>
            <h3 className='text-center mt-4 font-semibold text-2xl text-green-900'>UPDATE BOOK</h3>
            <div className='w-[90%] m-4 mx-auto max-w-[400px] border rounded-lg p-4'>
                <form onSubmit={onSubmit} className='w-full'>
                    <div>
                        <TextInput
                            autoComplete='off'
                            title='Tên sách'
                            placeholder='VD: THÉP ĐÃ TÔI THẾ ĐẤY'
                            onChange={handleOnChange}
                            value={dataOnSubmit?.name}
                            name='name'
                            type='text'
                            required={true}
                        />
                        <div className='grid gap-4 grid-cols-2'>
                            <TextInput
                                autoComplete='off'
                                title='SL1'
                                onChange={handleOnChange}
                                value={dataOnSubmit?.sl1}
                                name='sl1'
                                type='number'
                            />
                            <TextInput
                                autoComplete='off'
                                title='SL2'
                                onChange={handleOnChange}
                                value={dataOnSubmit?.sl2}
                                name='sl2'
                                type='number'
                            />
                        </div>
                        <div className='grid gap-4 grid-cols-2'>
                            <TextInput
                                autoComplete='off'
                                title='VT1'
                                onChange={handleOnChange}
                                value={dataOnSubmit?.vt1}
                                name='vt1'
                                type='text'
                            />
                            <TextInput
                                autoComplete='off'
                                title='VT2'
                                onChange={handleOnChange}
                                value={dataOnSubmit?.vt2}
                                name='vt2'
                                type='text'
                            />
                        </div>

                        <div className='grid gap-4 grid-cols-2'>
                            <TextInput
                                autoComplete='off'
                                title='VT3'
                                onChange={handleOnChange}
                                value={dataOnSubmit?.vt3}
                                name='vt3'
                                type='text'
                            />
                            <TextInput
                                autoComplete='off'
                                title='VT4'
                                onChange={handleOnChange}
                                value={dataOnSubmit?.vt4}
                                name='vt4'
                                type='text'
                            />
                        </div>

                        <TextInput
                            autoComplete='off'
                            title='Giá'
                            onChange={handleOnChange}
                            value={dataOnSubmit?.g}
                            name='g'
                            type='number'
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
