import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useCatch,
    Link
} from '@remix-run/react'

import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'

export function meta() {
    return (
        {
            charset: 'utf-8',
            title: 'ArgWatches - Home',
            description:'Venta de los relojes mas demandados en el mercado actualmente y mas',
            viewport: "width=device-width,initial-scale=1"
        }
    )
}


export function links() {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
            crossOrigin: 'true'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet'
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export default function App() {
    return (
        <Document>
            <Outlet />
        </Document>
    )
}


function Document({ children }) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer/>
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}


/* Manejo de errores */

export function CatchBoundary() {
    const error = useCatch()

    return(
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link className='error-enlace' to='/'> Volver a la pagina principal</Link>
        </Document>

    )
}

export function ErrorBoundary({error}){
    return(
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link className='error-enlace' to='/'> Volver a la pagina principal</Link> className='error-enlace'
        </Document>
    )
}