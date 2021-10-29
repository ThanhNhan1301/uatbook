import NextCors from 'nextjs-cors'
import model from '../../models/book'
import connect from '../../utils/connectDB'

export default async function Book(req, res) {
    NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    })
    await connect()
    switch (req.method) {
        case 'GET':
            const query = req.query

            await model
                .find(query)
                .then((result) => {
                    res.json({
                        data: result,
                        error: null,
                    })
                })
                .catch((error) =>
                    res.json({
                        data: null,
                        error,
                    })
                )
            break
        case 'PUT':
            const { id } = req.body
            const dataPut = req.body.data
            await model
                .findByIdAndUpdate({ _id: id }, dataPut)
                .then((result) => res.json({ result }))
                .catch((err) => console.log(err))
            break
        case 'POST':
            const data = req.body
            model
                .create({ ...data })
                .then((result) => res.json(result))
                .catch((error) => res.json(error.message))
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
