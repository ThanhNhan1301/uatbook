import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'
import { BiEdit, BiTrash } from 'react-icons/bi'
import { MdAddBox } from 'react-icons/md'
import AddCart from './AddCart'
import { useDispatch, useSelector } from 'react-redux'
import { addOrder } from '../store/actions/orders'

export default function Table({ data, handleDeleteItem }) {
    const dispatch = useDispatch()
    const [showOrder, setShowOrder] = useState(false)
    const [itemSelected, setItemSelected] = useState({})
    const router = useRouter()
    const handleAddItem = (idx, order, type) => {
        dispatch(addOrder({ idx, order, data: itemSelected, type }))
    }
    return (
        <div>
            <AddCart show={showOrder} stateOrder={setShowOrder} handleAddItem={handleAddItem} />
            <table className='w-full text-sm'>
                <thead>
                    <tr className='sticky top-0'>
                        <th className='sticky left-0 '>
                            <div className='min-w-[200px text-left'>TÊN</div>
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
                    {data.length > 0 &&
                        data.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td className='sticky'>
                                        <div className='min-w-[240px] max-w-[60%]  whitespace-pre-wrap text-left flex justify-between items-center'>
                                            <div className='flex-1'>{item.name}</div>
                                            <button
                                                className='text-2xl text-green-400 cursor-pointer ml-1 active:text-green-800 disabled:text-gray-400'
                                                onClick={() => {
                                                    setItemSelected(item)
                                                    setShowOrder(!showOrder)
                                                }}
                                                disabled={item.sl2 <= 0 ? true : false}
                                            >
                                                <MdAddBox />
                                            </button>
                                        </div>
                                    </td>
                                    <td>{item.sl1 ? item.sl1 : ''}</td>
                                    <td>{item.sl2 ? item.sl2 : ''}</td>
                                    <td>{item.g ? item.g : ''}</td>
                                    <td>{item.vt1 ? item.vt1 : ''}</td>
                                    <td>{item.vt2 ? item.vt2 : ''}</td>
                                    <td>{item.vt3 ? item.vt3 : ''}</td>
                                    <td>{item.vt4 ? item.vt4 : ''}</td>
                                    <td>
                                        <div className='text-2xl flex justify-between items-end'>
                                            <div
                                                className='mr-4 text-blue-900 cursor-pointer'
                                                title='Edit'
                                                onClick={() =>
                                                    router.push(`/book/update/${item._id}`)
                                                }
                                            >
                                                <BiEdit />
                                            </div>
                                            <div
                                                className='text-red-700 cursor-pointer'
                                                title='Delete'
                                                onClick={() => handleDeleteItem(item._id, idx)}
                                            >
                                                <BiTrash />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
}
