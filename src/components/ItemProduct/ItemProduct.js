import './ItemProduct.scss'
import { Link } from "react-router-dom"


const ItemProduct = ({ data }) => {

    const { title, category, image, price, stock, id } = data



    return (
        <div>
            <div className="item-product">
                <div className='card'>
                    <Link to={`productos/${category}/${id}`}>
                        <img src={`/assets/${image}`} alt="imagen productos"></img>
                        <p>{title}</p>
                    </Link>
                </div>
                <div className="category"><p>{category}</p></div>
                <div className='price-stock'>
                    <span>$ {price}</span>
                </div>
            </div>
        </div>

    )

}

export default ItemProduct