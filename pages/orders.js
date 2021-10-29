import moment from 'moment'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { getOrders } from '../axios/callApi/order'
import DetailOrder from '../components/DetailOrder'

export default function Orders() {
    const [orders, setOrders] = useState([])
    const orderCurrent = useSelector((state) => state.orders)
    const [showDetailOrder, setShowDetailOrder] = useState(false)
    const [orderSelected, setOrderSelected] = useState(null)
    const refOrderListChange = useRef([])
    useEffect(() => {
        const fetchDataOrder = async () => {
            const result = await getOrders()
            refOrderListChange.current = orderCurrent.concat(result.data)
            setOrders(orderCurrent.concat(result.data))
        }
        fetchDataOrder()
    }, [])
    const handleOnChange = (e) => {
        let { value } = e.target
        if (value) {
            value = moment(value).format('DD-MM-YYYY')
            const result = refOrderListChange.current.filter((item) => {
                return moment(item.createdAt).format('DD-MM-YYYY') === value
            })
            setOrders(result)
        } else {
            setOrders(refOrderListChange.current)
        }
    }
    return (
        <div>
            <DetailOrder
                show={showDetailOrder}
                handleClose={() => setShowDetailOrder(!showDetailOrder)}
                order={orderSelected}
            />
            <h3 className='text-center text-2xl font-semibold text-gray-800 my-8'>
                Manager Orders
            </h3>
            <form className='text-center mb-8'>
                <input
                    type='date'
                    className='outline-none bg-white px-2 py-1 border border-gray-300 rounded-md shadow-md'
                    onChange={handleOnChange}
                    placeholder='dd/mm/yyyy'
                />
            </form>
            <div className='w-[96%] m-auto overflow-x-auto scroll_custom_vertical'>
                <table className='select-none w-full'>
                    <thead>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Items</th>
                        <th>Total Price</th>
                        <th>Status</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {orders &&
                            orders.map((order, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>
                                            <span>
                                                {moment(order.createdAt).format('DD-MM-YYYY')}
                                            </span>
                                        </td>
                                        <td>{order.title}</td>
                                        <td>{order.data.length}</td>
                                        <td>
                                            {order.data.reduce((prev, curr) => {
                                                return prev + curr.qty * curr.g
                                            }, 0)}
                                        </td>
                                        <td>
                                            {order.status === 'active' ? (
                                                <span className='font-semibold text-yellow-500'>
                                                    {order.status}
                                                </span>
                                            ) : (
                                                <span>{order.status}</span>
                                            )}
                                        </td>
                                        <td>
                                            <button
                                                className='py-1 px-4 bg-blue-500 text-white rounded-md opacity-90 active:opacity-100'
                                                onClick={() => {
                                                    setOrderSelected(order)
                                                    setShowDetailOrder(!showDetailOrder)
                                                }}
                                            >
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
                {orders.length <= 0 && (
                    <div className='text-center mt-4'>
                        <span>No result</span>
                    </div>
                )}
            </div>
        </div>
    )
}
