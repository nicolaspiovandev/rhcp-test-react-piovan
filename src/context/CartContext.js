import {createContext, useState} from "react";

const CartContext = createContext()

const CartProdiver = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])

    const addProductToCart = (product) =>{
        setCartProducts(cartProducts =>[...cartProducts, product])
    }
    const data = {
        cartProducts,
        setCartProducts,
        addProductToCart
    }
    
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}       

export default CartProdiver

export {CartContext}