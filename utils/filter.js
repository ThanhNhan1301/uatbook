import removeAccents from './removeAccents'

export default function filter(data, text, field = 'name') {
    const result = data.filter((item) => {
        if (item[field]) {
            return removeAccents(item[field].toLowerCase()).includes(
                removeAccents(text.toLowerCase())
            )
        } else {
            return false
        }
    })

    return result
}
