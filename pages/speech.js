import { useEffect, useRef } from 'react'

export default function Speech() {
    const refRecog = useRef(null)
    useEffect(() => {
        const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
        const recognition = new SpeechRecognition()
        recognition.interResults = true
        recognition.lang = 'vi-VI'
        recognition.cotinuous = false
        refRecog.current = recognition
    }, [])

    const recognition = refRecog.current
    return (
        <div className='mt-20 mx-auto text-center'>
            <button
                onClick={() => recognition.start()}
                className='mr-5 py-2 px-4 bg-red-400 text-white'
            >
                Listen
            </button>
            <button className='py-2 px-4 bg-blue-400 text-white'>Stop Lister</button>
        </div>
    )
}
