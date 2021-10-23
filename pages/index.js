import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from '../axios/callApi/book'
import TextInput from '../components/Form/TextInput'
import Loading from '../components/Loading'
import Table from '../components/Table'
import useCheckLogin from '../hooks/useCheckLogin'
import { addProducts } from '../store/actions/products'
import filter from '../utils/filter'
import { getBooks } from '../axios/callApi/book'

export default function Home() {
    useCheckLogin()
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.data)
    const [isLoading, setIsLoading] = useState(false)
    const [renderData, setRenderData] = useState(products)

    const [isSearch, setIsSerch] = useState('')
    const debounce = useRef(null)

    useEffect(() => {
        const fetchData = async () => {
            if (products.length === 0) {
                setIsLoading(true)
                const resultData = await getBooks()
                dispatch(addProducts(resultData.data))
                setRenderData(resultData.data)
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    const onChange = (event) => {
        const text = event.target.value
        const handleFilter = () => {
            if (!text) {
                setRenderData(products)
                setIsSerch('')
            } else {
                const result = filter(products, text, 'name')
                setRenderData(result)
                setIsSerch(text)
            }
        }
        if (debounce.current) {
            clearTimeout(debounce.current)
        }
        debounce.current = setTimeout(handleFilter, 500)
    }
    const handleDeleteItem = async (id, idx) => {
        try {
            setIsLoading(true)
            await deleteBook(id)

            const resultData = await getBooks()
            dispatch(addProducts(resultData.data))
            setRenderData(resultData.data)

            const newDataRender = [...renderData]
            newDataRender.splice(idx, 1)
            setRenderData(newDataRender)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            return
        }
    }
    return (
        <div className='py-10 px-1'>
            <Loading show={isLoading} />
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
                    <Table data={renderData} handleDeleteItem={handleDeleteItem} />
                </div>
            )}
            <Link href='/book/create'>
                <div
                    className='
                    fixed bottom-[30px] right-[30px]
                    w-[50px] h-[50px] p-2 rounded-full 
                    bg-green-800 text-white 
                    text-3xl font-semibold
                    flex justify-center items-center
                    cursor-pointer opacity-90
                    active:opacity-100
            '
                >
                    <span>+</span>
                </div>
            </Link>
        </div>
    )
}
