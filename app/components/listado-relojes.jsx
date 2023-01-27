import Reloj from "./reloj"


function ListadoRelojes({ relojes }) {
    return (
        <>
            <h2 className="heading">Nuestra Coleccion</h2>
            {relojes?.length && (
                <div className="relojes-grid">
                    {relojes.map(reloj => (
                        <Reloj
                            key={reloj?.id}
                            reloj={reloj?.attributes}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

export default ListadoRelojes
