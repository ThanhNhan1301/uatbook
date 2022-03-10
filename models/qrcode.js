import mongoose from 'mongoose'

const Schema = new mongoose.Schema(
    {
        value: { type: String, required: true },
        status: { type: String, required: true },
    },
    {
        timestamps: true,
    }
)

export default mongoose.models.qrcodes || mongoose.model('qrcodes', Schema)
