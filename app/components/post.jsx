import { Link } from "@remix-run/react"

import { formatearFecha } from '~/utils/helpers'

function Post({ post }) {

  const { titulo, imagen, contenido, URL, publishedAt } = post

  return (
    <article className="post">
      <img src={imagen.data.attributes.formats.small.url} alt={`Imagen de ${titulo}`} />
      <div className="contenido">
        <h2>{titulo}</h2>
        <p className="fecha">Fecha: {formatearFecha(publishedAt)}</p>
        <p className="resumen">{contenido}</p>
      </div>
      <Link className="enlace" to={`/posts/${URL}`} >Leér Entrada</Link>
      
    </article>
  )
}

export default Post