import Head from 'next/head'

export default function HeadCustom({ title }) {
    return (
        <Head>
            <title>{title ? title : 'Create Next JS'}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
        </Head>
    )
}
