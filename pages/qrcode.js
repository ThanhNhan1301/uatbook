import { FaArrowLeft, FaDownload, FaTimes } from 'react-icons/fa'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { createQrcode, getAllQRCodes } from '../axios/callApi/qrcode'
import Qrcode from 'qrcode'

export default function QrcodePage() {
    const [showInputQR, setShowInputQR] = useState(false)
    const [valueInputQr, setValueInputQr] = useState(0)
    const [qrCodesCreate, setQrCodesCreate] = useState([])
    const [showLargeImageQr, setShowLargeImageQr] = useState({
        display: false,
        url: null,
        status: null,
    })
    const [loading, setLoading] = useState(false)

    const fetchAllCodes = async () => {
        try {
            const resQrCodes = await getAllQRCodes()
            let listQrCodeRender = resQrCodes.data
            await listQrCodeRender.map(async (item) => {
                const urlImage = await Qrcode.toDataURL(item.value)
                return (item.url = urlImage)
            })
            setQrCodesCreate(listQrCodeRender)
        } catch (error) {
            console.log(error)
            setValueInputQr([])
        }
    }

    useEffect(() => {
        fetchAllCodes()
    }, [])

    const getColor = (status) => {
        let color = ''
        switch (status) {
            case 'complete':
                color = 'text-gray-600'
                break
            case 'not-used':
                color = 'text-red-600'
                break
            default:
                color = 'text-blue-600'
                break
        }

        return color
    }

    async function createQrCodeFnc(callback = null, handleError = null) {
        const value = Date.now()
        const data = {
            value,
            status: 'not-used',
        }
        await createQrcode(data)
            .then(() => {
                callback && callback()
            })
            .catch(() => handleError && handleError())
    }
    const handleCreateManyQR = async () => {
        if (valueInputQr && valueInputQr != 0) {
            try {
                setLoading(true)
                for (let index = 0; index < valueInputQr; index++) {
                    await createQrCodeFnc()
                }
                await fetchAllCodes()
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }
    }

    const handleCreateOneQR = async () => {
        setLoading(true)
        await createQrCodeFnc(
            () => setLoading(false),
            () => setLoading(false)
        )
        await fetchAllCodes()
    }

    const handleShowLargeQRCode = (data) => {
        if (!data) return
        setShowLargeImageQr({
            display: true,
            url: data.url,
            status: data.status,
        })
    }

    const handleDownloadQRCode = (data) => {
        if (!data || data.status === 'complete') return
        const downloadUrl = document.createElement('a')
        downloadUrl.href = data.url
        downloadUrl.download = `${data.value}.png`
        document.body.appendChild(downloadUrl)
        downloadUrl.click()
        document.body.removeChild(downloadUrl)
    }

    return (
        <div>
            <div className='py-4'>
                <Link href='/' passHref={true}>
                    <div className='pl-4 flex items-center gap-1 cursor-pointer relative z-10'>
                        <div className='w-6 h-6 flex justify-center items-center bg-black text-white rounded-sm'>
                            <FaArrowLeft />
                        </div>
                        <span>Back</span>
                    </div>
                </Link>
            </div>

            {showLargeImageQr.display && (
                <div className='fixed inset-0 flex justify-center items-center bg-black z-30 bg-opacity-70'>
                    <div className='p-10 shadow-md bg-white relative rounded-md '>
                        <div
                            className='
                                absolute -top-12 right-0 
                                flex justify-center items-center
                                h-9 w-9 bg-blue-400 text-white 
                                rounded-full shadow-md cursor-pointer
                                a-30 active:bg-blue-600 transition
                            '
                            onClick={() =>
                                setShowLargeImageQr({
                                    display: false,
                                    url: null,
                                    status: null,
                                })
                            }
                        >
                            <FaTimes />
                        </div>
                        <div className='relative h-[200px] w-[200px] border-[6px] border-gray-900 rounded-md'>
                            <Image src={showLargeImageQr.url} alt='large-wrcode' layout='fill' />
                        </div>
                        <div className='mt-4 flex justify-center items-center gap-2'>
                            <span
                                className={`font-semibold uppercase  ${getColor(
                                    showLargeImageQr.status
                                )}`}
                            >
                                {showLargeImageQr.status}
                            </span>
                        </div>
                    </div>
                </div>
            )}
            {showInputQR && (
                <div className='my-5 flex justify-center m-auto items-center max-w-[250px] w-[50%]'>
                    <input
                        value={valueInputQr}
                        onChange={(e) => setValueInputQr(e.target.value)}
                        type='number'
                        placeholder='Nhập số QR Code muốn tạo'
                        className='border-[2px] w-full text-[13px] h-8 px-2 outline-none border-blue-400 rounded-md'
                    />
                </div>
            )}
            <div className='flex justify-center items-center mt-3 gap-5'>
                {!showInputQR && (
                    <span
                        onClick={handleCreateOneQR}
                        className='bg-blue-600 text-[15px] py-1 px-6 text-white cursor-pointer rounded-sm shadow-md'
                    >
                        {loading ? <AiOutlineLoading3Quarters /> : 'Tạo 1 QR Code'}
                    </span>
                )}
                {showInputQR && (
                    <span
                        onClick={() => {
                            if (showInputQR) {
                                setShowInputQR(!showInputQR)
                            }
                        }}
                        className='bg-black text-[15px] py-1 px-6 text-white cursor-pointer rounded-sm shadow-md'
                    >
                        Back
                    </span>
                )}
                {!showInputQR && (
                    <span
                        onClick={() => setShowInputQR(!showInputQR)}
                        className='bg-green-600 text-[15px] py-1 px-6 text-white cursor-pointer rounded-sm shadow-md'
                    >
                        Tạo nhiều QR Code
                    </span>
                )}

                {showInputQR && (
                    <span
                        className='flex justify-center items-center bg-green-600 text-[15px] h-8 px-6 text-white cursor-pointer rounded-sm shadow-md'
                        onClick={handleCreateManyQR}
                    >
                        {loading && valueInputQr == 0 ? (
                            <AiOutlineLoading3Quarters />
                        ) : (
                            `Tạo ${
                                valueInputQr.toString() == '0' ? '' : `- ${valueInputQr} QR Code`
                            }`
                        )}
                    </span>
                )}
            </div>
            <div className='mt-10 px-5'>
                <div className='text-blue-600 font-semibold mb-5'>
                    Tổng: {qrCodesCreate.length} QR Code
                </div>
                <ul>
                    {qrCodesCreate &&
                        qrCodesCreate.length > 0 &&
                        qrCodesCreate.map((item, key) => {
                            return (
                                <li
                                    key={key}
                                    className='flex justify-between items-center border-b py-2 gap-2'
                                >
                                    <div
                                        className='w-14 h-14 relative cursor-pointer'
                                        onClick={() => handleShowLargeQRCode(item)}
                                    >
                                        <Image src={item.url} layout='fill' alt='' />
                                    </div>
                                    <div>{item.value}</div>
                                    <div className='flex-1 flex justify-end pr-6'>
                                        <span className={getColor(item.status)}>{item.status}</span>
                                    </div>
                                    <div
                                        className={`${
                                            item.status !== 'complete'
                                                ? 'cursor-pointer text-blue-600'
                                                : 'text-gray-600'
                                        }`}
                                        onClick={() => handleDownloadQRCode(item)}
                                    >
                                        <FaDownload />
                                    </div>
                                </li>
                            )
                        })}
                </ul>
            </div>
        </div>
    )
}
