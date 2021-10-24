export default function Modal({ type, title, onClick, show, body }) {
    if (!show) return <div />
    let bg = ''
    switch (type.toLowerCase()) {
        case 'error':
            bg = 'bg-red-600'
            break
        case 'warning':
            bg = 'bg-yellow-600'
            break
        default:
            bg = 'bg-blue-600'
            break
    }
    return (
        <div
            className={`
                fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] py-3 w-full max-w-[400px] text-white rounded-lg text-center z-[50] px-4
                ${bg}
            `}
        >
            <h2 className='text-center p-3 text-lg uppercase'>{title}</h2>
            <p className='text-sm font-light mb-5'>{body && body}</p>
            <button
                className='px-8 py-1 bg-black rounded-md opacity-90 active:opacity-100'
                onClick={onClick && onClick}
            >
                {type.toLowerCase() === 'warning' ? 'Continue' : 'Close'}
            </button>
        </div>
    )
}
