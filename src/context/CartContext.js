import {createContext, useState} from "react";

const CartContext = createContext()

const CartProdiver = ({children}) => {
    const [name, setName] = useState("Nicolas")
    
    return(
        <CartContext.Provider value={setName}>
            {children}
        </CartContext.Provider>

    )
}       

export default CartProdiver

export {CartContext}