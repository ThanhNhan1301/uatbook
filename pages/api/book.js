import model from '../../models/book'
import connect from '../../utils/connectDB'

export default async function Book(req, res) {
    await connect()
    switch (req.method) {
        case 'GET':
            await model
                .find()
                .then((result) => {
                    res.json({
                        data: result,
                        error: null,
                    })
                })
                .catch((error) =>
                    console.log({
                        data: null,
                        error,
                    })
                )
            break
        case 'POST':
            const data = req.body
            model
                .create({ ...data })
                .then((result) => res.json(result))
                .catch((error) => res.json(error))
            break
        case 'DELETE':
            try {
                const { id } = req.query
                if (id) {
                    const result = await model.deleteOne({ _id: id })
                    res.json({ result, error: null })
                } else {
                    throw 'Not value id in pramas'
                }
            } catch (error) {
                res.json({
                    result: null,
                    error: error,
                })
            }
            break
        default:
            res.status(500).json({ error: 'Internal server error' })
            break
    }
}
