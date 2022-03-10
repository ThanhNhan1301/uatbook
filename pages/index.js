import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { FaQrcode, FaArrowLeft } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook, getBooks } from '../axios/callApi/book'
import TextInput from '../components/Form/TextInput'
import Loading from '../components/Loading'
import Modal from '../components/Modal'
import Table from '../components/Table'
import useCheckLogin from '../hooks/useCheckLogin'
import { addProducts } from '../store/actions/products'
import filter from '../utils/filter'
import { QrReader } from 'react-qr-reader'
import { checkInvalid, updateypeQrcode } from '../axios/callApi/qrcode'

export default function Home() {
    useCheckLogin()
    const [showCamera, setShowCamera] = useState(false)
    const initialStateModdal = {
        value: {},
        show: false,
        type: '',
        title: '',
        id: '',
    }
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.data)
    const [isLoading, setIsLoading] = useState(false)
    const [renderData, setRenderData] = useState([])
    const [modal, setModal] = useState(initialStateModdal)
    const [showActions, setShowActions] = useState(false)
    const [showInfo, setShowInfo] = useState({ isShow: false, messange: '', status: false })
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

    const handleOnResultReaderQrCode = async (result, error) => {
        if (result && !error) {
            setShowCamera(!showCamera)
            const value = result?.text
            if (!value) return
            const valueChecked = await checkInvalid(value)
            if (valueChecked.isValid) {
                if (valueChecked.status === 'active') {
                    setShowInfo({
                        type: valueChecked.status,
                        isShow: true,
                        messange: 'Mã Qr Code hợp lê.',
                        status: true,
                        id: valueChecked.id,
                    })
                } else if (valueChecked.status === 'not-used') {
                    setShowInfo({
                        isShow: true,
                        type: valueChecked.status,
                        messange: 'Mã Qr Code chưa Active.',
                        status: true,
                        id: valueChecked.id,
                    })
                } else if (valueChecked.status === 'complete') {
                    setShowInfo({
                        isShow: true,
                        type: valueChecked.status,
                        messange: 'Mã Qr Code đã được áp dụng.',
                        status: true,
                        id: valueChecked.id,
                    })
                }
            } else {
                setShowInfo({
                    type: valueChecked.status,
                    isShow: true,
                    messange: 'Mã Qr Code không hợp lê.',
                    status: false,
                    id: valueChecked.id,
                })
            }
        }
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

    const handleSetStatus = async (id, type) => {
        updateypeQrcode({ id, status: type })
            .then(() => {
                setShowInfo({
                    isShow: false,
                    messange: '',
                    status: false,
                    type: '',
                    id: '',
                })
            })
            .catch(() => {
                setShowInfo({
                    isShow: false,
                    messange: '',
                    status: false,
                    type: '',
                    id: '',
                })
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
            {showInfo.isShow && (
                <div className='fixed inset-0 bg-transparent z-20 flex justify-center items-center'>
                    <div
                        className={`w-[80%] py-5  text-center rounded-md shadow-md ${
                            showInfo.status ? 'bg-gray-300' : 'bg-red-500 text-white'
                        }`}
                    >
                        <div>{showInfo.messange}</div>
                        <div className='mt-7 flex justify-center items-center gap-3'>
                            <span
                                className='bg-white py-1 px-6 text-red-400 cursor-pointer rounded-sm shadow-md uppercase'
                                onClick={() =>
                                    setShowInfo({
                                        isShow: false,
                                        messange: '',
                                        status: false,
                                        type: '',
                                        id: '',
                                    })
                                }
                            >
                                Close
                            </span>

                            {showInfo.type === 'not-used' && (
                                <span
                                    className='bg-blue-600 py-1 px-6 text-white cursor-pointer rounded-sm shadow-md uppercase'
                                    onClick={() => handleSetStatus(showInfo.id, 'active')}
                                >
                                    Active
                                </span>
                            )}

                            {showInfo.type === 'active' && (
                                <span
                                    className='bg-blue-600 py-1 px-6 text-white cursor-pointer rounded-sm shadow-md uppercase'
                                    onClick={() => handleSetStatus(showInfo.id, 'complete')}
                                >
                                    Hoàn thành
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {showCamera && (
                <div
                    className='fixed inset-0 bg-white z-20'
                    onClick={() => setShowCamera(!showCamera)}
                >
                    <div className='pt-4 pl-4 flex items-center gap-1 cursor-pointer relative z-10'>
                        <div className='w-6 h-6 flex justify-center items-center bg-black text-white rounded-sm'>
                            <FaArrowLeft />
                        </div>
                        <span>Back</span>
                    </div>
                    <QrReader
                        constraints={{ facingMode: 'environment' }}
                        onResult={handleOnResultReaderQrCode}
                        videoContainerStyle={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                        }}
                    />
                </div>
            )}

            <div
                className='flex flex-col justify-center items-center mb-7'
                onClick={() => setShowCamera(!showCamera)}
            >
                <div
                    className='
                        h-10 px-3 gap-3 
                        flex justify-center items-center 
                        rounded-md bg-blue-300 
                        shadow-md cursor-pointer 
                        text-white 
                        active:bg-blue-600 transition
                         
                    '
                >
                    <FaQrcode size={24} constraints={{ facingMode: 'environment' }} />
                    <span>Scan QR</span>
                </div>
            </div>
            <div className='mb-6 -mt-2 text-blue-700 text-center'>
                <Link href={'/qrcode'} passHref={true}>
                    Management QR Code
                </Link>
            </div>
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
            <div className='text-center text-yellow-600 italic mb-4'>
                {products.length > 0 ? 'Data is realy !!!' : 'Loading...'}
            </div>
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
