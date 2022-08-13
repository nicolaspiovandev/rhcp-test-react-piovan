import { CartContext } from "../context/CartContext"
import { useContext } from "react"


const Checkout = () => {


  const { cartProducts } = useContext(CartContext)

  return (
    <>
      <div>
        <h1>Página de Checkout</h1>
      </div>
      <div>
        {
          cartProducts.map((product) => (
            <div>
              <div key={product.id}></div>
              <img src={`/assets/${product.image}`} alt="imagen productos"></img>
              <div>
                <p>{product.title}</p>
              </div>
              <div>
                <p>$ {product.price}</p>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )

}

export default Checkout