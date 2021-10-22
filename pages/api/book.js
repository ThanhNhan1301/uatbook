import model from '../../models/book'
import connect from '../../utils/connectDB'

export default async function Book(req, res) {
    connect()
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
        default:
            res.status(500).json({ error: 'Internal server error' })
            break
    }
}
