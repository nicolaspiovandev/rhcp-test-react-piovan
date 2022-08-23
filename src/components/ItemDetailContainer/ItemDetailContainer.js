import './ItemDetailContainer.scss'
import ItemDetail from '../ItemDetail/ItemDetail'
import products from '../../utils/products'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//Firebase
/* import { doc, getDoc } from "firebase/firestore"
import db from "../../firebaseConfig" */


const ItemDetailContainer = () => {
    
  const [productData, setProductData] = useState({})
  const { id } = useParams()

  useEffect(() => {
    filterById()
  }, [])

  const filterById = () => {
    products.some( (product) => {
      if (product.id == id) {
        setProductData(product)
      }
    }
  )
  }

  /* const getProduct = async () =>{
    const docRef = doc(db, 'productos', id)
    const docSnapshot = await getDoc(docRef)
    let product = docSnapshot.data()
    product.id = docSnapshot.id
    return product
  } */

  return (
    <div>
      <h1>Detalle</h1>
      <ItemDetail data={productData}/>
    </div>
  )
}

export default ItemDetailContainer