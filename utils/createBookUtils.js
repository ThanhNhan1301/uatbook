import { createBook } from '../axios/callApi/book'

const createData = (listData) => {
    listData.forEach(async (data) => {
        await createBook(data)
            .then(console.log('Ok'))
            .then(() => console.log('err'))
    })
}

export default createData
