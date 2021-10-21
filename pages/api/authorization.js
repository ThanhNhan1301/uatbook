import connect from '../../utils/connectDB'
import model from '../../models/user'

export default async function Login(req, res) {
    await connect()
    if (req.method === 'POST') {
        const { name, password } = req.body
        await model
            .find({ name, password })
            .then((response) => {
                if (response.length > 0) {
                    res.json({ valid: true, name })
                } else {
                    res.json({ valid: false, name })
                }
            })
            .catch(() => res.json({ valid: false, name }))
    } else {
        res.status(500).json('Internal server error')
    }
}
