import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.scss'

const NavBar = () => {

    const categories = [
        "Accesorios",
        "Indumentaria"
    ]


    return (
        <div className="header">
            <div className="navbar">
                <div className='title'>
                    <Link to='/'><h1>RHCP</h1></Link>
                </div>
                <ul className='navbar-items'>
                <Link to="/"><li><button>Inicio</button></li></Link>
                    {categories.map((category, i) => (
                        <Link key={i} to={`/category/${category}`}>
                            <li>
                                <button>{category}</button>
                            </li>
                        </Link>
                    ))
                    }
                </ul>
                <div className="cart-widget">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar



