export default function ReadExel() {
    const handleOnChange = (e) => {
        console.log(e.target.value)
    }
    return (
        <div>
            <h3 className='text-center text-2xl font-semibold text-gray-800 mt-10'>
                Reader Excel File
            </h3>
            <div className='text-center mt-7'>
                <input
                    className='outline-none bg-transparent px-2 py-1 border border-gray-300 rounded-md shadow-md'
                    type='date'
                    name='date-input'
                    onChange={handleOnChange}
                    placeholder='dd/mm/yyyy'
                />
            </div>
        </div>
    )
}
