import ItemCount from "../ItemCount/ItemCount"
import './ItemProduct.scss'


const ItemProduct = ({ data }) => {
    
    const { title, image, price, stock } = data
    
    

    return (
        <div>
        <div className="item-product">
            <div className='card'>
                <img src={`/assets/${image}`} alt="imagen productos"></img>
                <p>{title}</p>
            </div>
            <div className='price-stock'>
                <span>$ {price}</span>
                <p>Stock: {stock}</p>
                <ItemCount stock= {stock}></ItemCount>
            </div>
            
        </div>
        </div>
    )

}

export default ItemProduct