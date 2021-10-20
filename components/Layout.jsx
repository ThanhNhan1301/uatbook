import { Provider } from 'react-redux'
import Head from './Head'
import NavBar from './NavBar'
import store from '../store'

export default function Layout({ children }) {
    return (
        <Provider store={store}>
            <div className='m-auto max-w-7xl w-full'>
                <Head title='Book Store' />
                <NavBar />
                {children}
            </div>
        </Provider>
    )
}
