import mongoose from 'mongoose'

export default async function connect() {
    console.log(process.env.MONGOSE_URL)
    try {
        await mongoose.connect(process.env.MONGOSE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connected DB')
    } catch (err) {
        console.log(err)
    }
}
