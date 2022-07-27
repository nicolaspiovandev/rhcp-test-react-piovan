import './ItemCount.scss'
import {useState} from 'react'

const ItemCount = ({ data }) => {
    const [contador, setContador] = useState(0)

    const { title, image, price, stock } = data

    const addNumber = () => {
        if (contador < stock){
            setContador(contador + 1)
        }
    }

    const removeNumber = () => {
        if (contador > 1){
            setContador(contador - 1)
        }
    }

    /*  useEffect(() => {
         return () => {
             console.log("Ejecuto en fase de update")
         }
         
         /* fetch().then(
             setProduct()
         )
     }, []) */


    return (
        <div className="item-product">
            <div className='card'>
                <img src={`/assets/${image}`} alt="imagen productos"></img>
                <p>{title}</p>
            </div>
            <div className='price-stock'>
                <span>$ {price}</span>
                <p>Stock: {stock}</p>
            </div>
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

export default ItemCount