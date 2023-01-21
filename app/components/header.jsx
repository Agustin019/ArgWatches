import { Link } from "@remix-run/react"
import Logo from '../../public/img/smart-watch.png'

import Navegacion from "./navegacion"

function Header() {

    return (
        <header className="header">
            <div className="contenedor barra">
               <div className="logo-cont">
                 <Link to='/' className="">
                    <img className="logo" src={Logo} alt="Logo ArgWatches"/>
                 </Link>
                 <p className="logo-txt">ArgWatches</p>
               </div>
                <Navegacion/>
            </div>
        </header>
    )
}

export default Header