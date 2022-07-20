import { useState, useEffect } from 'react'
import './ItemProduct.scss'

const ItemProduct = ({ data }) => {
    const [contador, setContador] = useState(1)

    const { title, image, price, stock } = data


    const addNumber = () => {
        setContador(contador + 1)
    }

    const removeNumber = () => {
        setContador(contador - 1)
    }


    useEffect( () => {
        /* return () => {
            console.log("Ejecuto en fase de update")
        }
        
        /* fetch().then(
            setProduct()
        ) */ 
    },[])


    return (
        <div className="item-product">
            <img src={`/assets/${image}`} alt="imagen productos"></img>
            <p>{title}</p>
            <span>$ {price}</span>
            <p>Stock: {stock}</p>
            <div className='countProd'>
                <button onClick={removeNumber}>-</button>
                <p>{contador}</p>
                <button onClick={addNumber}>+</button>
            </div>
            <div className='btn-buy'>
                <button>Comprar!</button>
            </div>
        </div>
    )

}

export default ItemProduct