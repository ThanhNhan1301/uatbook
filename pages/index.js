import Link from 'next/link'
import { useRef, useState } from 'react'
import TextInput from '../components/Form/TextInput'
import Table from '../components/Table'
import useCheckLogin from '../hooks/useCheckLogin'
import removeAccents from '../utils/removeAccents'

export default function Home(props) {
    useCheckLogin()

    const products = props.data
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
                const result = products.filter((item) => {
                    if (item.name) {
                        console.log(removeAccents(item.name.toLowerCase()))
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
    return (
        <div className='py-10 px-1'>
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
                <Table data={renderData} />
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
    const res = await fetch(`${process.env.BASE_URL}/api/book`, {
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'no-cors',
    })
    const result = await res.json()
    return {
        props: {
            data: result.data,
        },
    }
}
