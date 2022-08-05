import { useContext } from "react";
import {CartContext} from "../../context/CartContext"
import ItemProduct from "../ItemProduct/ItemProduct";

const ItemList = ({dataProducts}) =>{
    console.log("Informacion desde contexto: ", useContext(CartContext))
return(
    <>
        {dataProducts.map( (product) => {
            return <ItemProduct key={product.id} data={product}></ItemProduct>
        })}
    </>
)
}

export default ItemList