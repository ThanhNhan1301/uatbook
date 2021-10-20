import { useRef, useState } from 'react'
import removeAccents from '../utils/removeAccents'
import { useRouter } from 'next/dist/client/router'
import { useSelector } from 'react-redux'

export default function Home(props) {
    const isLogin = useSelector((state) => state.userCurrent.isLogin)
    const products = props.data
    const [renderData, setRenderData] = useState([])
    const ref = useRef(null)

    const router = useRouter()
    if (!isLogin) {
        router.push('/login')
    }

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
                        return removeAccents(item.name.toLowerCase()).includes(text.toLowerCase())
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
            <form
                className='
                    w-full text-center mb-8 mt-2
                '
            >
                <input
                    type='search'
                    className='
                        w-[80%] max-w-[400px] p-3
                        border-[2px] border-green-400 
                        rounded-lg outline-none
                    '
                    placeholder='Enter text search... &#128540; &#128540; &#128540;'
                    onChange={onChange}
                />
            </form>
            <div className='overflow-auto scroll_custom'>
                <table className='w-full text-sm'>
                    <thead>
                        <tr>
                            <th className='sticky'>
                                <div className='min-w-[200px] whitespace-pre-wrap text-left'>
                                    TÊN
                                </div>
                            </th>
                            <th>SL1</th>
                            <th>SL2</th>
                            <th>G</th>
                            <th>VT1</th>
                            <th>VT2</th>
                            <th>VT3</th>
                            <th>VT4</th>
                            <th>NOTE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderData.length > 0 &&
                            renderData.map((item, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td className='sticky'>
                                            <div className='min-w-[200px]  whitespace-pre-wrap text-left'>
                                                {item.name}
                                            </div>
                                        </td>
                                        <td>{item.sl1 ? item.sl1 : ''}</td>
                                        <td>{item.sl2 ? item.sl2 : ''}</td>
                                        <td>{item.g ? item.g : ''}</td>
                                        <td>{item.vt1 ? item.vt1 : ''}</td>
                                        <td>{item.vt2 ? item.vt2 : ''}</td>
                                        <td>{item.vt3 ? item.vt3 : ''}</td>
                                        <td>{item.vt4 ? item.vt4 : ''}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
                {renderData.length === 0 && (
                    <span className='block text-center w-full py-5'>Dữ liệu đã sẵn sàng</span>
                )}
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://uatbook.vercel/app/api/book')
    const result = await res.json()
    return {
        props: {
            data: result.data,
        },
    }
}
