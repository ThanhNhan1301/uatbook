import readXlsxFile from 'read-excel-file'

export default async function ReadFileExcel(fileReader) {
    if (fileReader) {
        let result = await readXlsxFile(fileReader)
        const cols = result.splice(0, 1)[0]
        const data = result.map((item) => {
            let x = {}
            cols.forEach((col, i) => {
                x[col] = item[i]
            })
            return x
        })
        return data
    }
}
