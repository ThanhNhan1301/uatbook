import modelQrCode from '../../models/qrcode'
import connect from '../../utils/connectDB'

export default async function Search(req, res) {
    await connect()

    switch (req.method) {
        case 'GET':
            modelQrCode
                .find()
                .sort({ createdAt: '-1' })
                .then((qrCodes) => {
                    res.json({ status: 200, data: qrCodes })
                })
                .catch((error) => res.json({ status: 400, error }))
            break
        default:
            res.status(500).json('Internal server error')
            break
    }
}
