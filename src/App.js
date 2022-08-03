import './App.css';
import NavBar from './components/NavBar/NavBar';
/* import Modal from './components/Modal/Modal'; */
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Detail from './pages/Detail';

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
    <BrowserRouter >
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <NavBar></NavBar>
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productos' element={<Products />} />
            <Route path='/productos/:id' element={<Detail />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1>ERROR 404 - PAGINA NO ENCONTRADA</h1>} />
          </Routes>

        </header>
        {/* <Modal>
        <h2>Modal de registro</h2>
        <form>
          <input type="text"></input>
          <button>Enviar</button>
        </form>
      </Modal> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
