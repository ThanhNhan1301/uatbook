import modelQrCode from '../../models/qrcode'
import connect from '../../utils/connectDB'

export default async function Search(req, res) {
    await connect()

    switch (req.method) {
        case 'GET':
            const data = req.query?.value
            if (!data) return res.json({ status: 400 })

            modelQrCode
                .findOne({ value: data })
                .then((qrCode) => {
                    if (qrCode) {
                        res.json({ isValid: true, status: qrCode.status, id: qrCode._id })
                    } else {
                        res.json({ isValid: false })
                    }
                })
                .catch(() => res.json({ status: 400, error: 1 }))
            break
        case 'PUT':
            const dataUpdate = req.body

            if (!dataUpdate) res.json({ status: 400 })
            modelQrCode
                .findByIdAndUpdate(dataUpdate.id, { status: dataUpdate.status })
                .then((result) => {
                    res.json({ status: 200, error: null })
                })
                .catch((error) => {
                    res.json({ status: 400, error })
                })
            break
        case 'POST':
            const dataCreate = req.body
            await modelQrCode
                .create({ ...dataCreate })
                .then((qrcode) => {
                    res.json({ status: 200, data: qrcode })
                })
                .catch((err) => {
                    res.json({ status: 400, err })
                })
            break
        default:
            res.status(500).json('Internal server error')
            break
    }
}
