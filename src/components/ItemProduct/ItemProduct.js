import ItemCount from "../ItemCount/ItemCount"
import './ItemProduct.scss'
import { Link } from "react-router-dom"


const ItemProduct = ({ data }) => {

    const { title, image, price, stock, id } = data



    return (
        <div>
            <div className="item-product">
                <div className='card'>
                    <Link to={`productos/${id}`}>
                        <img src={`/assets/${image}`} alt="imagen productos"></img>
                        <p>{title}</p>
                    </Link>
                </div>
                <div className='price-stock'>
                    <span>$ {price}</span>
                    <p>Stock: {stock}</p>
                    <ItemCount stock={stock}></ItemCount>
                </div>
            </div>
        </div>

    )

}

export default ItemProduct