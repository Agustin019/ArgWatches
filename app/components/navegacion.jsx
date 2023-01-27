import { Link, useLocation } from "@remix-run/react"
import ImagenCarrito from '../../public/img/carrito.png'
function Navegacion() {

  const location = useLocation()
  return (
    <nav className="navegacion">
      <Link
        to='/'
        className={`${location.pathname === '/' && 'activo'}`}
      > Inicio </Link>
      <Link
        to='/relojes'
        className={`${location.pathname === '/relojes' && 'activo'}`}
      > Tienda </Link>
      <Link
        to='/nosotros'
        className={`${location.pathname === '/nosotros' && 'activo'}`}
      > Nosotros </Link>
      <Link
        to="/blog"
        className={location.pathname === '/blog' ? 'activo' : ''}
      >Blog</Link>
      <Link
        to="/carrito"
      ><img src={ImagenCarrito} alt='logo carrito' /></Link>
    </nav>
  )
}

export default Navegacion