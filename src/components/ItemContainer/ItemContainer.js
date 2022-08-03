import { useState, useEffect } from "react"
import './ItemContainer.scss'
import ItemList from "../ItemList/ItemList"
import products from "../../utils/products"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"


const ItemContainer = ({ section }) => {

    const [listProducts, setListProducts] = useState([])

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })



    useEffect(() => {
        getProducts
            .then((res) => { //Respuesta OK
                //console.log("Productos: ", res)
                setListProducts(res)
            })
            .catch((error) => { //Falla la respuesta
                console.log("La llamada fallo")
            })
            .finally(() => { //Siempre que termina por Ok o fallo
                //setSpinner(false)
            })
    })

    return (
        <div className="list-product">
            <h2>{section}</h2>
            <ItemList dataProducts={listProducts} />
        </div>
    )
}

export default ItemContainer