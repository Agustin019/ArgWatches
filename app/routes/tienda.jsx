import { useLoaderData } from "@remix-run/react"
import { getRelojes } from '~/models/relojes.server'

import styles from '~/styles/relojes.css'
import Reloj from "~/components/reloj"

export function links(){
  return[
    {
      rel:'stylesheet',
      href: styles
    }
  ]
}

export function meta() {
  return {
    title: 'ArgWatches - Tienda',
    description: 'ArgWatches - Nuestra coleccion de los relojes mas demandados en el mercado'
  }
}

export async function loader(){
  const relojes = await getRelojes()
  return relojes.data
}

function Tienda() {
  const relojes = useLoaderData()

  return (
    <main className="contenedor">
      <h2 className="heading">Nuestra Coleccion</h2>
        
        {relojes?.length &&(
          <div className="relojes-grid">
              {relojes.map(reloj=>(
                  <Reloj
                    key={reloj?.id}
                    reloj={reloj?.attributes}
                  />
              ))}
          </div>
        )}
    </main>
  )
}

export default Tienda