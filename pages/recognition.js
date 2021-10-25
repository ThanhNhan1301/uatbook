import 'regenerator-runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Dictaphone = () => {
    const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition()
    const startListening = () =>
        SpeechRecognition.startListening({
            continuous: false,
            interResults: true,
            language: 'vi-VN',
        })

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>
    }

    return (
        <div className='m-10 text-center'>
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <button
                onTouchStart={startListening}
                onMouseDown={startListening}
                onTouchEnd={SpeechRecognition.stopListening}
                onMouseUp={SpeechRecognition.stopListening}
                className='mt-3 py-1 px-4 bg-blue-600 text-white uppercase font-semibold'
            >
                Hold to talk
            </button>
            <p>{transcript}</p>
        </div>
    )
}
export default Dictaphone
