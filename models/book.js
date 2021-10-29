import mongoose from 'mongoose'
const schemaBook = {
    name: { type: String, require: true },
    sl1: { type: Number, default: 0 },
    sl2: { type: Number, default: 0 },
    g: { type: Number, default: 10000 },
    vt1: { type: String, default: '' },
    vt2: { type: String, default: '' },
    vt3: { type: String, default: '' },
    vt4: { type: String, default: '' },
}
const Schema = new mongoose.Schema(schemaBook, {
    timestamps: true,
})

export default mongoose.models.Books || mongoose.model('Books', Schema)
