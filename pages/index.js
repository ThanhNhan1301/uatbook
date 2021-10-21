import { useRouter } from 'next/dist/client/router'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import FormSearch from '../components/FormSearch'
import Table from '../components/Table'
import removeAccents from '../utils/removeAccents'

export default function Home(props) {
    const isLogin = useSelector((state) => state.userCurrent.isLogin)

    const products = props.data
    const [renderData, setRenderData] = useState([])
    const ref = useRef(null)
    const router = useRouter()

    useEffect(() => {
        if (!isLogin) {
            return router.push('/login')
        }
    })

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
            <FormSearch onChange={onChange} />
            {renderData.length === 0 && (
                <span className='block text-center w-full mb-8 text-blue-700'>
                    Dữ liệu đã sẵn sàng
                </span>
            )}
            <div className='overflow-auto scroll_custom'>
                <Table data={renderData} />
            </div>
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
