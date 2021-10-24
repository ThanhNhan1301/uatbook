import connect from '../../utils/connectDB'
import model from '../../models/book'
import filter from '../../utils/filter'
import NextCors from 'nextjs-cors'

export default async function Search(req, res) {
    await connect()
    NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    })
    if (req.method === 'GET') {
        try {
            const { q } = req.query
            if (!q) {
                res.json({ data: [] })
            } else {
                const data = await model.find()
                if (q === '*') {
                    res.json({ data })
                } else {
                    const result = filter(data, q, 'name')
                    res.json({ data: result })
                }
            }
        } catch (err) {
            res.json({ data: [] })
        }
    } else {
        res.status(500).json('Internal server error')
    }
}
