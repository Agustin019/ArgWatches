import Imagen from '../../public/img/nosotros-reloj2.webp'
import Styles from '~/styles/nosotros.css'
import { useOutletContext } from '@remix-run/react'

export function links() {
  return [
    {
      as:'style',
      rel: 'stylesheet',
      href: Styles
    },
    {
      rel: 'preload',
      href: Imagen,
      as: 'image'
    }
  ]
}

export function meta() {
  return {
    title: 'ArgWatches - Nosotros',
    description: 'Venta de los relojes mas demandados en el mercado actualmente y mas'
  }
}

function Nosotros() {
  const data = useOutletContext()
    console.log(data);
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={Imagen} alt="Imagen sobre nosotros" />
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quibusdam repellat amet aperiam vitae, facilis, nemo veritatis officia non repellendus modi praesentium? Quae voluptatibus eveniet, at qui cum magni accusantium?
            Eum eaque voluptate architecto repellendus!</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quibusdam repellat amet aperiam vitae, facilis, nemo veritatis officia non repellendus modi praesentium? Quae voluptatibus eveniet, at qui cum magni accusantium?
            Eum eaque voluptate architecto repellendus !</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros