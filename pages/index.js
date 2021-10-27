import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook, getBooks } from '../axios/callApi/book'
import AddCart from '../components/AddCart'
import TextInput from '../components/Form/TextInput'
import Loading from '../components/Loading'
import Modal from '../components/Modal'
import Table from '../components/Table'
import useCheckLogin from '../hooks/useCheckLogin'
import { addProducts } from '../store/actions/products'
import filter from '../utils/filter'

export default function Home() {
    useCheckLogin()
    const initialStateModdal = {
        show: false,
        type: 'warning',
        title: '',
    }
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.data)
    const [isLoading, setIsLoading] = useState(false)
    const [renderData, setRenderData] = useState([])
    const [modal, setModal] = useState(initialStateModdal)
    const [showActions, setShowActions] = useState(false)

    const [isSearch, setIsSerch] = useState('')
    const debounce = useRef(null)

    useEffect(() => {
        const fetchData = async () => {
            if (products.length === 0) {
                setIsLoading(true)
                const resultData = await getBooks()
                dispatch(addProducts(resultData.data))
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    const onChange = (event) => {
        const text = event.target.value
        const handleFilter = () => {
            if (text) {
                if (text === '*') {
                    setRenderData(products)
                    setIsSerch(text)
                } else {
                    const result = filter(products, text, 'name')
                    setRenderData(result)
                    setIsSerch(text)
                }
            } else {
                setRenderData([])
            }
        }
        if (debounce.current) {
            clearTimeout(debounce.current)
        }
        debounce.current = setTimeout(handleFilter, 500)
    }
    const handleDeleteItem = async (id, idx) => {
        setIsLoading(true)
        await deleteBook(id)
            .then(async () => {
                await getBooks().then((result) => {
                    dispatch(addProducts(result.data))
                    setRenderData(result.data)
                })
            })
            .then(() => {
                const newDataRender = [...renderData]
                newDataRender.splice(idx, 1)
                setRenderData(newDataRender)
                setIsLoading(false)
            })
            .catch(() => {
                setIsLoading(false)
                return
            })
    }
    return (
        <div className='py-10 px-1'>
            <Loading show={isLoading} />
            <Modal
                {...modal}
                onClick={() => {
                    setModal(initialStateModdal)
                    handleDeleteItem()
                }}
            />
            <div
                className='
                w-[400px] text-center mb-4 mt-2 mx-auto
                relative
            '
            >
                <TextInput
                    type='search'
                    placeholder='Enter text search... &#128540; &#128540; &#128540;'
                    onChange={onChange}
                />
            </div>
            <div className='text-center text-yellow-600 italic mb-4'>Data is realy !!!</div>
            {isSearch && (
                <div className='mb-4 pl-4'>
                    <span>
                        Result:
                        <span className='pl-1 text-yellow-700 font-semibold'>"{isSearch}"</span> -
                        Total:
                        <span className='text-blue-800 font-semibold'>
                            {' '}
                            {renderData.length}
                        </span>{' '}
                        items
                    </span>
                </div>
            )}
            {renderData.length > 0 && (
                <div className='overflow-auto scroll_custom scroll-none'>
                    <Table
                        data={renderData}
                        handleDeleteItem={() =>
                            setModal({
                                ...modal,
                                show: true,
                                title: 'DELETE BOOK',
                                body: 'Are you sure with your actions. This may cause data loss',
                            })
                        }
                    />
                </div>
            )}

            <div
                className='
                    fixed bottom-[30px] right-[30px]
                '
            >
                <div
                    className='w-[40px] h-[40px] rounded-full 
                    bg-green-800 text-white 
                    text-xl font-semibold
                    flex justify-center items-center
                    cursor-pointer opacity-90
                    active:opacity-100'
                    onClick={() => setShowActions(!showActions)}
                >
                    +
                </div>
                <div
                    className={`absolute bottom-[calc(120%)] right-0 rounded-md transition-all ${
                        showActions ? 'scale-100' : 'scale-0'
                    }`}
                >
                    <Link href='/book/create'>
                        <div className='rounded-md p-2 mb-1 last:mb-0 bg-gray-300 text-gray-800 hover:bg-yellow-600 hover:text-white cursor-pointer text-center'>
                            Create
                        </div>
                    </Link>
                    <Link href='/orders'>
                        <div className='rounded-md p-2 mb-1 last:mb-0 bg-gray-300 text-gray-800 hover:bg-yellow-600 hover:text-white cursor-pointer text-center'>
                            Orders
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
