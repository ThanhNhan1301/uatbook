import connect from '../../utils/connectDB'
import model from '../../models/user'

export default async function Login(req, res) {
    await connect()
    if (req.method === 'POST') {
        const { name, password } = JSON.parse(req.body)
        await model
            .find({ name, password })
            .then((response) => {
                if (response.length > 0) {
                    res.json({ isLogin: true, error: null, name })
                } else {
                    res.json({ isLogin: false, error: 'Username or password does not exist' })
                }
            })
            .catch((err) => res.json({ isLogin: false, error: err }))
    } else {
        res.status(500).json('Internal server error')
    }
}
