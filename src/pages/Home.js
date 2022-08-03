import ItemContainer from "../components/ItemContainer/ItemContainer"

const Home = () => {
    return (
        <div className="main-container">
            <h1>Productos</h1>
            <ItemContainer section="Productos destacados"></ItemContainer>
            <ItemContainer section="Productos en oferta"></ItemContainer>
            <ItemContainer section="Productos mas vistos"></ItemContainer>
        </div>
    )
}

export default Home