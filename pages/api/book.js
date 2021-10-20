import model from '../../models/book'
import connect from '../../utils/connectDB'

export default async function Book({ method }, res) {
    connect()
    switch (method) {
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
        default:
            res.status(500).json({ error: 'Internal server error' })
            break
    }
}
