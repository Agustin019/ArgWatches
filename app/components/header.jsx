import { Link } from "@remix-run/react"
import Logo from '../../public/img/LogoMakr-0xJqq3.png'

import Navegacion from "./navegacion"

function Header() {

    return (
        <header className="header">
            <div className="contenedor barra">
                <Link to='/' className="logo">
                    <img className="logo" src={Logo} alt="Logo ArgWatches"/>
                </Link>
                <Navegacion/>
            </div>
        </header>
    )
}

export default Header