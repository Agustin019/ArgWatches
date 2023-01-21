import { getReloj } from '~/models/relojes.server'
import { useLoaderData } from '@remix-run/react'
import Styles from '~/styles/relojes.css'

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: Styles
        }

    ]
}

export async function loader({ params }) {
    const { relojUrl } = params
    const reloj = await getReloj(relojUrl)
    return reloj
}

function Reloj() {

    const reloj = useLoaderData()
    const { nombre, precio, descripcion, imagen } = reloj.data[0].attributes

    return (
        <main className='contnedor reloj'>
            <img className='imagen' src={imagen.data.attributes.url} alt={`imagen del reloj ${nombre}`} />
            <div className='contenido'>
                <h3>{nombre}</h3>
                <p className="texto">{descripcion}</p>
                <p className="precio">${precio}</p>
            </div>
        </main>
    )
}

export default Reloj