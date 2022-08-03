import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.scss'

const NavBar = () => {
    return (
        <header className="row header">
            <nav className="col navbar">
                <div className='title'>
                    <h1>RHCP</h1>
                </div>
                <ul className='navbar-items'>
                    <Link to="/"><li><button>Inicio</button></li></Link>
                    <Link to="/productos"><li><button>Productos</button></li></Link>
                    <Link to=""><li><button>Servicios</button></li></Link>
                    <Link to=""><li><button>Nosotros</button></li></Link>
                    <Link to=""><li><button>Contacto</button></li></Link>
                </ul>
                <CartWidget></CartWidget>
            </nav>
        </header>
    )
}

export default NavBar







