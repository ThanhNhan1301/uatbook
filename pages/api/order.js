import { async } from 'regenerator-runtime'
import modelOrder from '../../models/order'
import modelBook from '../../models/book'
import connect from '../../utils/connectDB'

export default async function Search(req, res) {
    await connect()

    switch (req.method) {
        case 'GET':
            break
        case 'POST':
            const data = req.body
            if (!data) res.json({ status: 400 })
            let isUpdateComlete = true
            await modelOrder
                .create({ ...data, status: 'done' })
                .then((result) => {
                    const listData = result.data
                    listData.forEach(async (item) => {
                        const data = { ...item, sl2: item.sl2 - item.qty }
                        delete data.qty
                        console.log(data)
                        await modelBook
                            .findByIdAndUpdate({ _id: item._id }, { ...data })
                            .catch(() => (isUpdateComlete = false))
                    })
                    if (isUpdateComlete) {
                        res.json({ status: 200 })
                    } else {
                        res.json({ status: 400 })
                    }
                })
                .catch(() => {
                    res.json({ status: 400 })
                })
            break
        default:
            res.status(500).json('Internal server error')
            break
    }
}
