import readExcel from 'read-excel-file'

import { FaBars } from 'react-icons/fa'
import { useRef } from 'react'

export default function ReadExel() {
    const refInput = useRef()
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
                    className='outline-none px-2 py-1 border border-gray-300 rounded-md'
                    type='date'
                    onChange={handleOnChange}
                    placeholder='Choose Date'
                />
            </div>
        </div>
    )
}
