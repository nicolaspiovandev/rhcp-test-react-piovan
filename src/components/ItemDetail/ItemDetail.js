import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'



const ItemDetail = ({ data }) => {
    const [quantitySelected, setQuantitySelected] = useState(0)

    return (
        <div>
            <div className='card-detail'>
                <img src={`/assets/${data.image}`} alt="imagen productos"></img>
                <p>{data.title}</p>
                <p>{data.category}</p>
            </div>
            <div className='price-detail'>
                <span>$ {data.price}</span>
                <div>
                    {
                        quantitySelected > 0 ? <Link to="/cart" className='btn-buy'><button className='btn-buy'>TERMINAR COMPRA</button></Link> : <ItemCount stock={data.stock} setQuantitySelected={setQuantitySelected} productData={data}></ItemCount>
                    }
                </div>
            </div>
        </div>

    )
}

export default ItemDetail