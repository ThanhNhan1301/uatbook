import mongoose from 'mongoose'
const schemaBook = {
    name: { type: String, required: true },
    sl1: { type: Number, default: 0 },
    sl2: { type: Number, default: 0 },
    g: { type: Number, default: 10000 },
    vt1: { type: String },
    vt2: { type: String },
    vt3: { type: String },
    vt4: { type: String },
}
const Schema = new mongoose.Schema(schemaBook, {
    timestamps: true,
})

export default mongoose.models.Books || mongoose.model('Books', Schema)
