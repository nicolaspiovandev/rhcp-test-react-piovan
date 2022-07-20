
import './NavBar.scss'

const NavBar = () => {
    return (
        <header className="row header">
            <nav className="col navbar">
                <div className='title'>
                    <h1>RHCP</h1>
                </div>
                <ul className='navbar-items'>
                    <li>
                        <a>Inicio</a>
                    </li>
                    <li>
                        <a>Productos</a>
                    </li>
                    <li>
                        <a>Servicios</a>
                    </li>
                    <li>
                        <a>Nosotros</a>
                    </li>
                    <li>
                        <a>Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar