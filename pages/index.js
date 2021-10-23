import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { deleteBook, getBooks } from '../axios/callApi/book'
import { search } from '../axios/callApi/search'
import TextInput from '../components/Form/TextInput'
import Loading from '../components/Loading'
import Table from '../components/Table'
import useCheckLogin from '../hooks/useCheckLogin'

export default function Home(props) {
    useCheckLogin()
    const [isLoading, setIsLoading] = useState(false)
    const [renderData, setRenderData] = useState([])
    const debounce = useRef(null)

    const onChange = (event) => {
        const handleFilter = async () => {
            const text = event.target.value
            const result = await search(text)
            setRenderData(result.data)
        }
        if (debounce.current) {
            clearTimeout(debounce.current)
        }
        debounce.current = setTimeout(handleFilter, 200)
    }
    const handleDeleteItem = async (id, idx) => {
        try {
            setIsLoading(true)
            await deleteBook(id)
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
