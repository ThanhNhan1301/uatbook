export default function FormSearch({ onChange }) {
    if (!onChange) return <div></div>
    return (
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
    )
}
