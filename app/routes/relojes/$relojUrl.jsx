import { getReloj } from '~/models/relojes.server'
import { useLoaderData } from '@remix-run/react'
import Styles from '~/styles/relojes.css'


export async function loader({ params }) {
    const { relojUrl } = params
    const reloj = await getReloj(relojUrl)

    if(reloj.data.length === 0){
        throw new Response('',{
            status: 404,
            statusText:'Reloj no encontrado'
        })
    }
    return reloj
}

export function meta({ data }) {

    if(!data){
        return{
            title: 'ArgWatches - Reloj no encontrado',
            description:`Venta de los relojes mas top del mercado. Reloj No encontrado`
        }
    }
    return {
        title: `ArgWatches - ${data.data[0].attributes.nombre}`,
        description: `Venta de los relojes mas top del mercado, reloj:${data.data[0].attributes.nombre}`
    }
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: Styles
        }
    ]
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