import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemContainer from './components/ItemContainer/ItemContainer';
/* import Modal from './components/Modal/Modal'; */

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
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
        <NavBar></NavBar>
        </nav>
        <div className="main-container">
          <h1>Productos</h1>
          <ItemContainer section="Productos destacados"></ItemContainer>
          <ItemContainer section="Productos en oferta"></ItemContainer>
          <ItemContainer section="Productos mas vistos"></ItemContainer>
        </div>
      </header>
      {/* <Modal>
        <h2>Modal de registro</h2>
        <form>
          <input type="text"></input>
          <button>Enviar</button>
        </form>
      </Modal> */}
    </div>
  );
}

export default App;
