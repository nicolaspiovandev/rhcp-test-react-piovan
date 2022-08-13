import { useState, useEffect } from "react"
import './ItemContainer.scss'
import ItemList from "../ItemList/ItemList"
import products from "../../utils/products"
import { useParams } from "react-router-dom"


const ItemContainer = ({ section }) => {

    const [listProducts, setListProducts] = useState([])
    const {categoryId} = useParams()

    const getProducts = new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })



    useEffect(() => {
        if(categoryId){
            getProducts
           .then((res) => { //Respuesta OK
                setListProducts(res.filter(products => products.category === categoryId)) //filtro por categoría
            }) 
        } else {
            getProducts
            .then((res) => {
                setListProducts(res)
            })
        }
            
            
    }, [categoryId])

    return (
        <div className="list-product">
            <h2>{section}</h2>
            <ItemList dataProducts={listProducts} />
        </div>
    )
}

export default ItemContainer