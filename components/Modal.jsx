export default function Modal({ type, title, onClick, show }) {
    if (!show) return <div />
    return (
        <div
            className={`
                fixed top-[50%] translate-y-[-50%] left-[50%]   translate-x-[-50%] py-3 w-full max-w-[400px] text-white rounded-lg text-center
                ${type === 'error' ? 'bg-red-600' : 'bg-yellow-600'}
            `}
        >
            <div className='text-center p-3'>{title}</div>
            <button
                className='px-8 py-1 bg-black uppercase rounded-md opacity-90 active:opacity-100'
                onClick={onClick && onClick}
            >
                Close
            </button>
        </div>
    )
}
