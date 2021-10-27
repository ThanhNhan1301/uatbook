import mongoose from 'mongoose'

const Schema = new mongoose.Schema(
    {
        id: { type: Number, required: true },
        title: { type: String, required: true },
        data: { type: Array, required: true },
        status: { type: String, default: 'done' },
    },
    {
        timestamps: true,
    }
)

export default mongoose.models.Orders || mongoose.model('Orders', Schema)
