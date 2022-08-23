import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Cart from "./components/Cart/Cart"
import Detail from './pages/Detail';
import CartProdiver from './context/CartContext';

function App() {

  /* CONSUMIR UNA API CON FETCH (GET POR DEFECTO)
  fetch("URL")
  .then((response => {
    return response.json()
  })
  .then( (data) => {
    console.log("informacio que traigo", data)
  })
   */

  return (
    <CartProdiver>
      <BrowserRouter >
        <div className="App">
          <header className="App-header">
            <nav className="navbar">
              <NavBar></NavBar>
            </nav>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/productos/:category/:id' element={<Detail />} />
              <Route path='/category/:categoryId' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<h1>ERROR 404 - PAGINA NO ENCONTRADA</h1>} />
            </Routes>
          </header>
        </div>
      </BrowserRouter>
    </CartProdiver>
  );
}

export default App;
