import mongoose from 'mongoose'

const Shema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        sl1: { type: Number, default: 0 },
        sl2: { type: Number, default: 0 },
        g: { type: Number, default: 0 },
        vt1: { type: String },
        vt2: { type: String },
        vt3: { type: String },
        vt4: { type: String },
    },
    {
        timestamps: true,
    }
)

const model = mongoose.model('Books') || mongoose.model('Books', Shema)

export default model
