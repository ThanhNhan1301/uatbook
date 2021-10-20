import mongoose from 'mongoose'

const Schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
    }
)

export default mongoose.models.Users || mongoose.model('Users', Schema)
