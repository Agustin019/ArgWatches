import { getReloj } from '~/models/relojes.server'
import { useLoaderData, useOutletContext } from '@remix-run/react'
import { useState } from 'react'


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


function Reloj() {
    const { agregarCarrito } = useOutletContext()
    const [ cantidad, setCantidad ] = useState(0)
    const reloj = useLoaderData()

    const { nombre, precio, descripcion, imagen } = reloj.data[0].attributes

    const handlesubmit = e => {
        e.preventDefault()
        if(cantidad < 1){
            alert('Debes seleccionar un cantidad')
            return
        }

        const relojSeleccionado = {
            id: reloj.data[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }
        agregarCarrito(relojSeleccionado)
    }

    return (
        <div className='reloj'>
            <img className='imagen' src={imagen.data.attributes.url} alt={`imagen del reloj ${nombre}`} />
            <div className='contenido'>
                <h3>{nombre}</h3>
                <p className="texto">{descripcion}</p>
                <p className="precio">${precio}</p>

                <form onSubmit={handlesubmit} className='formulario'>
                    <label htmlFor="Cantidad">Cantidad</label>

                    <select 
                        name="Cantidad" 
                        id="Cantidad"
                        onChange={e => setCantidad(+e.target.value)}
                        >
                        <option value="0">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <input 
                        type="submit"
                        value="Agregar al carrito" 
                    />
                </form>
            </div>
        </div>
    )
}

export default Reloj