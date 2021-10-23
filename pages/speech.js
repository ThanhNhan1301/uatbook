import { useEffect, useRef, useState } from 'react'

export default function Speech() {
    const [recognition, setRecognition] = useState()
    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
        const recognition = new SpeechRecognition()
        recognition.interResults = true
        recognition.lang = 'vi-VI'
        recognition.cotinuous = false
        setRecognition(recognition)
    }, [])
    if (recognition) {
        recognition.onspeechend = () => {
            recognition.stop()
        }
        recognition.onerror = (err) => {
            console.log(err)
        }
        recognition.onresult = (event) => {
            console.log(event)
        }
    }
    return (
        <div className='mt-20 mx-auto text-center'>
            <button
                onClick={() => recognition?.start()}
                className='mr-5 py-2 px-4 bg-red-400 text-white'
            >
                Listen
            </button>
        </div>
    )
}
