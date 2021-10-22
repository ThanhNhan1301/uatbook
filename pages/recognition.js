import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export default function Recognition() {
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
        useSpeechRecognition()
    return (
        <div className='text-center mt-10'>
            <p className='mb-3'>{browserSupportsSpeechRecognition ? 'Support...' : 'No Support'}</p>
            <p className='mb-6'>Microphone: {listening ? 'ON' : 'OFF'}</p>
            <button
                className='py-2 px-4 mr-4 bg-green-500 text-white font-semibold'
                onClick={SpeechRecognition.startListening}
            >
                Listen Start
            </button>
            <button
                className='py-2 px-4 mr-4 bg-red-500 text-white font-semibold'
                onClick={SpeechRecognition.stopListening}
            >
                Listen Stop
            </button>
            <button
                className='py-2 px-4 bg-yellow-500 text-white font-semibold'
                onClick={resetTranscript}
            >
                Reset
            </button>
            <p className='mt-6'>Result: {transcript} </p>
        </div>
    )
}
