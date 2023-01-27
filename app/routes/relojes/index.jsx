import { useLoaderData } from "@remix-run/react"
import { getRelojes } from '~/models/relojes.server'

import stylesRelojes from '~/styles/relojes.css'
import  ListadoRelojes from '~/components/listado-relojes'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesRelojes
    }
  ]
}

export function meta() {
  return {
    title: 'ArgWatches - Tienda',
    description: 'ArgWatches - Nuestra coleccion de los relojes mas demandados en el mercado'
  }
}

export async function loader() {
  const relojes = await getRelojes()
  return relojes.data
}

function Tienda() {
  const relojes = useLoaderData()

  return (
    <main className="contenedor">
      <ListadoRelojes relojes={relojes} />
    
    </main>
  )
}

export default Tienda