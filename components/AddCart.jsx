import { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { RiAddLine, RiSubtractFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks } from '../axios/callApi/book'
import * as orderApi from '../axios/callApi/order'
import { deleteItemOrder, deleteOrder, updateOrder } from '../store/actions/orders'
import { addProducts } from '../store/actions/products'
import FormAddOrder from './Form/FormAddOrder'

export default function AddCart({ show = false, stateOrder, itemSelected }) {
    const dispatch = useDispatch()
    const store = useSelector((state) => state.orders)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSaveOrder = async (orderData, idx) => {
        if (!loading) {
            setLoading(true)
            await orderApi
                .save(orderData)
                .then(async ({ status }) => {
                    console.log(status)
                    if (status === 200) {
                        await getBooks().then((result) => {
                            dispatch(addProducts(result.data))
                        })
                        setLoading(false)
                        dispatch(deleteOrder(idx))
                    } else {
                        setLoading(false)
                        setError('Saved Order Failre')
                    }
                })
                .catch(() => {
                    setLoading(false)
                    setError('Saved Order Failre')
                })
        }
    }

    const hanldeAddItemOrder = (idxOrder, itemData, type) => {
        dispatch(updateOrder({ indexOrder: idxOrder, itemData, type }))
    }

    return (
        <div>
            <div
                className={` 
                    fixed inset-0 z-[100] 
                    flex justify-center items-center 
                    transition-all ${show ? 'scale-100' : 'scale-0'}
                `}
            >
                <div className='absolute inset-0' onClick={() => stateOrder(false)} />
                <div
                    className='
                        w-[98%] max-w-[550px] bg-white 
                        px-6 py-3 z-[100] 
                        rounded-md border max-h-[70vh] 
                        overflow-y-auto scroll_custom_vertical 
                        relative
                    '
                >
                    <div className='mb-5 text-center absolute top-0 right-0'>
                        <button
                            className='w-[36px] h-[36px] bg-red-500 text-white font-semibold'
                            onClick={() => stateOrder(false)}
                        >
                            X
                        </button>
                    </div>
                    <FormAddOrder />
                    {store.length === 0 && (
                        <div className='mt-5 text-center italic text-base text-gray-800'>
                            <p>You have no orders at the moment</p>
                        </div>
                    )}
                    {store.length !== 0 &&
                        store.map((order, idx) => {
                            let total = 0
                            return (
                                <div key={idx}>
                                    <div
                                        className='
                                            mb-2 flex justify-between items-center 
                                            bg-gray-100
                                    '
                                    >
                                        <div
                                            className='
                                                flex flex-1 items-center
                                                px-3 h-[36px] rounded-md 
                                                transition 
                                            '
                                        >
                                            <h3 className='text-gray-700'>{order.title}</h3>
                                            <span className='text-gray-400 text-sm ml-1'>
                                                ({order.data.length} items)
                                            </span>
                                        </div>
                                        <div
                                            className='
                                                w-[36px] h-[36px] cursor-pointer 
                                                flex justify-center items-center 
                                                bg-green-500 font-semibold text-white
                                            '
                                            onClick={() => {
                                                hanldeAddItemOrder(idx, itemSelected, '+')
                                            }}
                                        >
                                            +
                                        </div>
                                    </div>
                                    <div>
                                        {order.data.length > 0 &&
                                            order.data.map((data, i) => {
                                                total += data.qty * data.g
                                                return (
                                                    <div
                                                        key={i}
                                                        className='
                                                            pl-6 py-2 border-b text-gray-800
                                                            flex justify-between items-center
                                                        '
                                                    >
                                                        <p className='max-w-[75%]'>
                                                            <span className='font-semibold'>
                                                                {i + 1}
                                                            </span>
                                                            . {data.name}
                                                        </p>
                                                        <div className='flex justify-end items-center'>
                                                            <div className='flex mr-6'>
                                                                <button
                                                                    className='
                                                                        w-5 h-5 rounded-full 
                                                                        bg-gray-300 text-white font-semibold 
                                                                        flex justify-center items-center
                                                                    '
                                                                    onClick={() => {
                                                                        hanldeAddItemOrder(
                                                                            idx,
                                                                            data,
                                                                            '-'
                                                                        )
                                                                    }}
                                                                >
                                                                    <RiSubtractFill />
                                                                </button>
                                                                <span
                                                                    contentEditable={true}
                                                                    className='
                                                                        text-base mx-2 w-8 text-center text-yellow-500 font-semibold 
                                                                        outline-none
                                                                    '
                                                                    onBlur={({ target }) => {
                                                                        let { innerText } = target
                                                                        hanldeAddItemOrder(
                                                                            idx,
                                                                            data,
                                                                            innerText
                                                                        )
                                                                    }}
                                                                >
                                                                    {data.qty}
                                                                </span>
                                                                <button
                                                                    className='
                                                                        w-5 h-5 rounded-full 
                                                                        bg-gray-300 text-white font-semibold 
                                                                        flex justify-center items-center
                                                                    '
                                                                    onClick={() =>
                                                                        hanldeAddItemOrder(
                                                                            idx,
                                                                            data,
                                                                            '+'
                                                                        )
                                                                    }
                                                                >
                                                                    <RiAddLine />
                                                                </button>
                                                            </div>

                                                            <button
                                                                className='
                                                                    w-5 h-5 rounded-full 
                                                                    bg-red-500 text-white font-semibold 
                                                                    flex justify-center items-center'
                                                                onClick={() =>
                                                                    dispatch(
                                                                        deleteItemOrder({
                                                                            order: idx,
                                                                            item: i,
                                                                        })
                                                                    )
                                                                }
                                                            >
                                                                x
                                                            </button>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        <div className='text-center pb-6 pt-2'>
                                            <p className='mb-2k text-sm text-red-500 font-semibold'>
                                                {error}
                                            </p>
                                            <p className='mb-3 font-semibold text-gray-800'>
                                                Total : {total} VNĐ
                                            </p>
                                            <button
                                                className='
                                                    px-4 py-1 mr-5 bg-red-500 text-white 
                                                    rounded-sm cursor-pointer 
                                                    opacity-90 active:opacity-100
                                                '
                                                onClick={() => dispatch(deleteOrder(idx))}
                                            >
                                                Delete
                                            </button>
                                            <button
                                                className='
                                                    px-4 py-1 bg-blue-500 text-white 
                                                    rounded-sm cursor-pointer 
                                                    opacity-90 active:opacity-100
                                                    disabled:bg-gray-300
                                                '
                                                onClick={() => handleSaveOrder(order, idx)}
                                                disabled={order.data.length <= 0 ? true : false}
                                            >
                                                {loading && (
                                                    <AiOutlineLoading3Quarters
                                                        size={14}
                                                        className='animate-spin inline-block mr-2'
                                                    />
                                                )}
                                                <span>Done</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}
