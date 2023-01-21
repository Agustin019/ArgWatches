import { Link } from "@remix-run/react";

function Reloj({ reloj }) {

  const { descripcion, imagen, nombre, precio, url } = reloj



  return (
    <div className="reloj">
      <img src={imagen.data.attributes.formats.medium.url} alt={`Imagen reloj${nombre}`} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">${precio}</p>

        <Link className="enlace" to={`/relojes/${url}`}>Ver Producto</Link>
      </div>
    </div>
  )
}

export default Reloj