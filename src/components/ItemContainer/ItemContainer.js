import { useState, useEffect } from "react"
import './ItemContainer.scss'
import ItemList from "../ItemList/ItemList"
import products from "../../utils/products"
import { useParams } from "react-router-dom"
/* import { collection, getDocs } from "firebase/firestore"
import db from "../../firebaseConfig" */

const ItemContainer = ({ section }) => {

    const [listProducts, setListProducts] = useState([])
    const {categoryId} = useParams()

   /*  const getProducts = async () => {
        const productCollection = collection(db, "productos")
        const productSnapshot = await getDocs(productCollection)
        const productList = productSnapshot.docs.map ( (doc) =>{
            let product = doc.data()
            product.id = doc.id
            return product
        })
    } */
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