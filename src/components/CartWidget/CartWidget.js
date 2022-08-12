import {useContext} from 'react'
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {
    

    const { cartProducts, totalProducts } = useContext(CartContext)

    
    return(
        <div className='cart-widget' >
            {cartProducts.length !== 0 && <p>{totalProducts}</p>}
                {cartProducts.map((product) => {
                    return(
                        <div className='item-cart-product' key={product.id}>
                            <img src={`/assets/${product.image}`} alt="" />
                            <div className='cart-product__details'>
                                <p>{product.title}</p>
                                
                            </div>
                            <div className='cart-product__details'>
                                <p>$ {product.price}</p>
                            </div>
                            <div className='cart-product__action' >
                                
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default CartWidget
