import { getRelojes } from '~/models/relojes.server'
import { getPosts } from '~/models/posts.server'
import StyleRelojes from '~/styles/relojes.css'
import StylePosts from '~/styles/blog.css'
import { useLoaderData } from '@remix-run/react'
import  ListadoRelojes from '~/components/listado-relojes'
import  ListadoPosts  from '~/components/listado-posts'
import Separador from '~/components/separador'

export function links(){
  return[
    {
      rel:'stylesheet',
      href:StyleRelojes
    },
    {
      rel:'stylesheet',
      href:StylePosts
    }
  ]
}

export function meta(){
  return{}
}

export async function loader(){
    const [relojes, posts] = await Promise.all([
      getRelojes(),
      getPosts()
    ])

    return{
      relojes: relojes.data,
      posts: posts.data
    }
}

function Index() {

  const {relojes, posts} = useLoaderData()
 
  return (
    <>
      <main className='contenedor'>
      <ListadoRelojes relojes={relojes}/>
      </main>
      <Separador/>
      <section className='contenedor'>
      <ListadoPosts posts={posts}/>
      </section>
    </>
  )
}

export default Index