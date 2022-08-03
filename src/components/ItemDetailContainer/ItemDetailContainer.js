import './ItemDetailContainer.scss'
import ItemDetail from '../ItemDetail/ItemDetail'
import products from '../../utils/products'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


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

  return (
    <div>
      <h1>Detalle</h1>
      <ItemDetail data={productData}/>
    </div>
  )
}

export default ItemDetailContainer