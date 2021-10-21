import model from '../../models/book'
import connect from '../../utils/connectDB'
import NextCors from 'nextjs-cors'

export default async function Book(req, res) {
    NextCors(req, res, {
        methods: ['GET', 'POST', 'PATCH', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200,
    })
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
        default:
            res.status(500).json({ error: 'Internal server error' })
            break
    }
}
