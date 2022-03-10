export function downloadQRCode(value, nameFile, type = 'png') {
    QRCode.toDataURL(value, (err, url) => {
        const downloadlink = document.createElement('a')
        downloadlink.href = url
        downloadlink.download = `${nameFile}.${type}`
        document.body.appendChild(downloadlink)
        downloadlink.click()
        document.body.removeChild(downloadlink)
    })
}
