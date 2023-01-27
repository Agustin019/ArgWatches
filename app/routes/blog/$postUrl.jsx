import { useLoaderData } from '@remix-run/react'
import { getPost } from '~/models/posts.server'
import { formatearFecha } from '~/utils/helpers'

export function meta({ data }) {
  if (!data) {
    return {
      title: 'ArgWatches - Entrada no encontrada',
      description: `Relojes, venta de Relojes, entrada no encontrada`
    }
  }
  return {
    title: `ArgWatches - ${data?.data[0]?.attributes.titulo}`,
    description: `Relojes, venta de Relojes, entrada ${data.data[0].attributes.titulo}`
  }
}

export async function loader({ params }) {
  const { postUrl } = params
  const post = await getPost(postUrl)
  if (post.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Entrada no encontrada'
    })
  }
  return post
}


function Post() {
  const post = useLoaderData()
  const { titulo, publishedAt, contenido, imagen } = post?.data[0]?.attributes
  return (
    <article className="post mt-3">
      <img src={imagen?.data?.attributes?.url} alt={`Imagen de ${titulo}`} />
      <div className="contenido">
        <h2>{titulo}</h2>
        <p className="fecha">Fecha: {formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  )
}

export default Post