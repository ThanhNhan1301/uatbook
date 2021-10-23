import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function Loading({ show }) {
    if (!show) return <div />
    return (
        <div className='fixed inset-0 z-[100] bg-black bg-opacity-40 flex justify-center items-center'>
            <div className='animate-spin text-xl mr-2'>
                <AiOutlineLoading3Quarters />
            </div>
            <div>
                <span>Loading...</span>
            </div>
        </div>
    )
}
