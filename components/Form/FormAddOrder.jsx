import { useForm } from 'react-hook-form'
import { MdAddBox } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { createOrder } from '../../store/actions/orders'

export default function FormAddOrder() {
    const { register, reset, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const onSubmit = (value) => {
        dispatch(
            createOrder({
                title: value.order,
                id: Math.random(),
            })
        )
        reset()
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex justify-between items-center mb-6 mt-10'
        >
            <input
                {...register('order')}
                required={true}
                type='text'
                placeholder='Add new orders...'
                className='
                    text-sm
                    text-gray-800
                    h-8 flex-1 mr-2
                    bg-transparent outline-none 
                    border-b-[2px] border-green-400
                '
            />
            <button
                type='submit'
                className='text-3xl text-green-400 hover:text-yellow-400 cursor-pointer'
            >
                <MdAddBox />
            </button>
        </form>
    )
}
