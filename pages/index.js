import Link from 'next/link'
import { useRef, useState } from 'react'
import TextInput from '../components/Form/TextInput'
import Table from '../components/Table'
import useCheckLogin from '../hooks/useCheckLogin'
import removeAccents from '../utils/removeAccents'
import { deleteBook, getBooks } from '../axios/callApi/book'
import Loading from '../components/Loading'

export default function Home(props) {
    useCheckLogin()
    const [isLoading, setIsLoading] = useState(false)
    const products = props.data
    const refProducts = useRef(products)
    const [renderData, setRenderData] = useState([])
    const ref = useRef(null)
    const onChange = (event) => {
        const text = event.target.value
        if (!text) {
            return setRenderData([])
        }
        if (text === '*') {
            setRenderData(products)
        } else {
            const handleFilter = () => {
                const p = refProducts.current ? refProducts.current : products
                const result = p.filter((item) => {
                    if (item.name) {
                        return removeAccents(item.name.toLowerCase()).includes(
                            removeAccents(text.toLowerCase())
                        )
                    } else {
                        return false
                    }
                })
                setRenderData(result)
            }
            if (ref.current) {
                clearTimeout(ref.current)
            }
            ref.current = setTimeout(handleFilter, 300)
        }
    }
    const handleDeleteItem = async (id, idx) => {
        try {
            setIsLoading(true)
            await deleteBook(id)
            const responce = await getBooks()
            refProducts.current = responce.data
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
                w-[400px] text-center mb-8 mt-2 mx-auto
            '
            >
                <TextInput
                    type='search'
                    placeholder='Enter text search... &#128540; &#128540; &#128540;'
                    onChange={onChange}
                />
            </div>

            {renderData.length === 0 && (
                <span className='block text-center w-full mb-8 text-blue-700'>
                    Dữ liệu đã sẵn sàng
                </span>
            )}
            <div className='overflow-auto scroll_custom'>
                <Table data={renderData} handleDeleteItem={handleDeleteItem} />
            </div>
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

export async function getStaticProps() {
    const res = await getBooks()
    return {
        props: {
            data: res.data,
        },
    }
}
