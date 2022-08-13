import {createContext, useEffect, useState} from "react";

const CartContext = createContext()

const CartProdiver = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() =>{ 
        calculateTotalPrice()
        calculateTotalQuantity()
    },[cartProducts])

    const addProductToCart = (product, quantity) =>{
        let productInCart = cartProducts.find(cartItem => cartItem.id === product.id)
        if(!productInCart) {
            setCartProducts(cartProducts =>[...cartProducts, {...product, quantity}])
        } else {
            productInCart.quantity += quantity
            removeProduct(product)
            setCartProducts(cartProducts =>[...cartProducts, {...productInCart}])
        }
    }

    const removeProduct = (product) =>{
        setCartProducts(cartProducts => cartProducts.filter(x => x.id !== product.id))
    }
    
    const clearCart = () =>{ //borrar todo
        setCartProducts([])
    }



    const calculateTotalPrice = () =>{
        let total = 0
        for (const product of cartProducts) {
            total += product.quantity * product.price
        }
        setTotalPrice(total)
    }

    const calculateTotalQuantity = () =>{
        let total = 0
        for (const product of cartProducts) {
            total += product.quantity
        }
        setTotalProducts(total)
        
    } 

    const data = {
        cartProducts,
        setCartProducts,
        addProductToCart,
        totalProducts,
        totalPrice,
        clearCart,
        removeProduct
    }
    
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>

    )
}       

export default CartProdiver

export {CartContext}