import { Outlet, useOutletContext } from '@remix-run/react'
import stylesRelojes from '~/styles/relojes.css'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesRelojes
    }
  ]
}


function Tienda() {

  return (
    <main className="contenedor">
      <Outlet context={useOutletContext()}/>
    </main>
  )
}

export default Tienda