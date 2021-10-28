import { async } from 'regenerator-runtime'
import listData from '../utils/data'
import { createBook } from '../axios/callApi/book'

const createDataBook = async (data) => {
    await createBook(data).then(() => console.log('Create Ok'))
}

const createData = () => {
    listData.forEach(async (data) => {
        await createDataBook(data)
    })
}

export default createData
