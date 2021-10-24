import 'regenerator-runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill'

const APP_ID = '55614b9e-8874-4c60-9578-231407738a18'
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(APP_ID)
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition)

const Dictaphone = () => {
    const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition()
    const startListening = () => SpeechRecognition.startListening({ continuous: true })

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>
    }

    return (
        <div className='border p-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <button
                onTouchStart={startListening}
                onMouseDown={startListening}
                onTouchEnd={SpeechRecognition.stopListening}
                onMouseUp={SpeechRecognition.stopListening}
                className='px-3 p-1 bg-blue-500 text-white mt-8'
            >
                Hold to talk
            </button>
            <p className='mt-4 textc'>{transcript}</p>
        </div>
    )
}
export default Dictaphone
