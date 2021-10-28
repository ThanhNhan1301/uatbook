import { Fragment } from 'react'
import { FaTimes } from 'react-icons/fa'

export default function DetailOrder({ show, handleClose, order }) {
    if (!order) return <Fragment />
    return (
        <div className={`fixed inset-0 z-[100] transition-all ${show ? 'scale-100' : 'scale-0'}`}>
            <div className='absolute inset-0 z-10' onClick={handleClose} />
            <div
                className='
                    absolute top-[50%] left-[50%] shadow-xl
                    translate-x-[-50%] translate-y-[-50%] 
                    border-[2px] rounded-md 
                    bg-gray-100 p-5 w-[90%] max-w-[500px]
                    z-20 overflow-y-auto max-h-[70%] scroll_custom_y
                '
            >
                <div
                    className='
                        w-[32px] h-[32px] 
                        absolute top-0 right-0 
                        bg-red-600 text-white 
                        flex justify-center items-center 
                        cursor-pointer opacity-90
                        active:opacity-100
                    '
                    onClick={handleClose}
                >
                    <FaTimes />
                </div>
                <div>
                    <div className='text-center'>
                        <h1 className='text-2xl font-semibold text-gray-800 mb-3'>Detail Order</h1>
                        <span className='block text-blue-700'>{order.title}</span>
                        <span className='text-sm'>{order._id}</span>
                    </div>
                    {order.data.map((item, idx) => {
                        return (
                            <div className='mt-5 flex items-center border-t border-b border-dashed border-blue-500 p-2'>
                                <div className='flex-1'>
                                    {idx + 1}. {item.name}
                                </div>
                                <div className='justify-end flex-col'>
                                    <div
                                        className='font-semibold text-sm'
                                        style={{ textAlign: 'end' }}
                                    >
                                        {item.qty} SP
                                    </div>
                                    <div
                                        className='font-semibold text-sm'
                                        style={{ textAlign: 'end' }}
                                    >
                                        {item.g} /SP
                                    </div>
                                    <div
                                        className='mt-2 font-semibold text-blue-600'
                                        style={{ textAlign: 'end' }}
                                    >
                                        {item.qty * item.g} VNĐ
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='text-center pt-4 text-lg text-yellow-600 font-semibold'>
                    Total: 2000000000 VND
                </div>
            </div>
        </div>
    )
}
