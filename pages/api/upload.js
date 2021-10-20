import data from '../../utils/data'
import models from '../../models/book'
import connect from '../../utils/connectDB'

export default async function upload(req, res) {
    connect()

    res.json('Ok')
}
