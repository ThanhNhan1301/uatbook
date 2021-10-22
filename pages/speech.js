// export default function Recognition() {
//     return (
//         <div className='text-center mt-10'>
//             <p className='mb-3'></p>
//             <p className='mb-6'></p>
//             <button className='py-2 px-4 mr-4 bg-green-500 text-white font-semibold'>
//                 Listen Start
//             </button>
//             <button className='py-2 px-4 mr-4 bg-red-500 text-white font-semibold'>
//                 Listen Stop
//             </button>
//             <button className='py-2 px-4 bg-yellow-500 text-white font-semibold'>Reset</button>
//             <p className='mt-6'>Result: </p>
//         </div>
//     )
// }

import { useSpeechRecognition } from 'react-speech-recognition'

export default function Speech() {
    const {
        transcript,
        interimTranscript,
        finalTranscript,
        resetTranscript,
        listening,
        browserSupportsSpeechRecognition,
        isMicrophoneAvailable,
    } = useSpeechRecognition()
    useEffect(() => {
        if (interimTranscript !== '') {
            console.log('Got interim result:', interimTranscript)
        }
        if (finalTranscript !== '') {
            console.log('Got final result:', finalTranscript)
        }
    }, [interimTranscript, finalTranscript])
    const listenContinuously = () =>
        SpeechRecognition.startListening({
            continuous: true,
            language: 'en-GB',
        })
    const listenOnce = () => SpeechRecognition.startListening({ continuous: false })

    if (!browserSupportsSpeechRecognition) {
        return <span>No browser support</span>
    }

    if (!isMicrophoneAvailable) {
        return <span>Please allow access to the microphone</span>
    }

    return (
        <div>
            <div>
                <span>Listening: {listening ? 'on' : 'off'}</span>
                <button onClick={resetTranscript}>Reset</button>
                <span>{transcript}</span>
            </div>
            <div
                onTouchStart={listenContinuously}
                onMouseDown={listenContinuously}
                onTouchEnd={SpeechRecognition.stopListening}
                onMouseUp={SpeechRecognition.stopListening}
            >
                Hold to talk
            </div>
            <button onClick={listenOnce}>Listen once</button>
            <button onClick={listenContinuously}>Listen continuously</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
        </div>
    )
}
