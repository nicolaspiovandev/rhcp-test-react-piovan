import { useContext, useState } from 'react'
import './ItemCount.scss'
import { CartContext } from '../../context/CartContext'


const ItemCount = ({ stock, setQuantitySelected, productData }) => {

    const { addProductToCart } = useContext(CartContext)

    const [contador, setContador] = useState(1)


    const addNumber = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const removeNumber = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    const onAdd = () => {
        addProductToCart(productData)
        setQuantitySelected(contador)
    }


    return (
        <div>
            <p>Stock: {stock}</p>
            <div className='countProd'>
                <button onClick={removeNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <div className='btn-buy'>
                <button onClick={onAdd}>AGREGAR AL CARRITO</button>
            </div>
        </div>
    )

}

export default ItemCount