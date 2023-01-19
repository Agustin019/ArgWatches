export async function getRelojes(){
    const respuesta = await fetch(`${process.env.API_URL}/relojes?populate=imagen`)
    const resultado = await respuesta.json()

    return resultado
}