import { useState, useEffect } from "react"
import './ItemContainer.scss'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../firebaseConfig"

const ItemContainer = ({ section }) => {

    const [listProducts, setListProducts] = useState([])
    const { categoryId } = useParams()


    useEffect(() => {
    
    const productsCollection = collection(db, "productos")
    const q = query(productsCollection, where("category", "==", `${categoryId}`))

    if(categoryId){
      getDocs(q)
      .then(result => {
        const listResult = result.docs.map(product =>{
            return{
              id: product.id,
              ...product.data(),
            } 
        })
        setListProducts(listResult)
      })
      .catch((error) => {
      console.log(error)
      })
      }else{
        getDocs(productsCollection)
        .then(result => {
          const listResult = result.docs.map(product =>{
            return{
            id: product.id,
            ...product.data(),
          } 
        })
        setListProducts(listResult)
        })
        .catch((error) => {
          console.log(error)
        })
      }
  }, [categoryId]);

    return (
        <div className="list-product">
            <h2>{section}</h2>
            <ItemList dataProducts={listProducts} />
        </div>
    )
}

export default ItemContainer







 /*    const getProducts = async () => {
        const productsCollection = collection(db, "productos")
        const docSnapshot = await getDocs(productsCollection)
        const data = docSnapshot.docs.map(product => product.data())
        return data
    }
        useEffect(() => {
        const handleProducts = async () => {
            const res = await getProducts()
            console.log(JSON.stringify(res, null, 2))


            if (categoryId) {
                setListProducts(res.filter(products => products.category === categoryId)) //filtro por categoría
            } else {
                setListProducts(res)
            }
        }

        handleProducts()
    }, [categoryId])
 */
