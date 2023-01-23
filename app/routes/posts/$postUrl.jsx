import { useLoaderData } from "@remix-run/react"
import { getPost } from '~/models/posts.server'
import { formatearFecha } from '~/utils/helpers'
import Styles from '~/styles/blog.css'

export function meta({ data }) {

    if(!data){
        return{
            title: 'ArgWatches - Entrada blog no encontrada',
            description:`Venta de los relojes mas top del mercado. Blog No encontrado`
        }
    }
    return {
        title: `ArgWatches - ${data.data[0].attributes.titulo}`,
        description: `Venta de los relojes mas top del mercado, reloj:${data.data[0].attributes.titulo}`
    }
}

export function links(){
    return[
        {
            rel:'stylesheet',
            href: Styles
        }
    ]
}

export async function loader({ params }){
    const { postUrl } = params
    const post = await getPost(postUrl)

    if(post.data.length === 0){
        throw new Response('',{
            status: 404,
            statusText:'Entrada blog no encontrada'
        })
    }
    return post
}

function Post() {

    const post = useLoaderData()
    const { titulo, publishedAt, contenido, imagen } = post?.data[0]?.attributes

  return (
    <article className="contenedor post mt-3">
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