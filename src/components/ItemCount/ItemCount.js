import { useContext, useState } from 'react'
import './ItemCount.scss'
import { CartContext } from '../../context/CartContext'


const ItemCount = ({ stock, setQuantitySelected, productData }) => {

    const { addProductToCart } = useContext(CartContext)

    const [quantity, setQuantity] = useState(1)


    const addNumber = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const removeNumber = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const onAdd = () => {
        addProductToCart(productData, quantity)
        setQuantitySelected(quantity)
    }


    return (
        <div>
            <p>Stock: {stock}</p>
            <div className='countProd'>
                <button onClick={removeNumber}>-</button>
                <p>{quantity}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <div className='btn-buy'>
                <button onClick={onAdd}>AGREGAR AL CARRITO</button>
            </div>
        </div>
    )

}

export default ItemCount