import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"


const Checkout = () => {


  const { cartProducts, totalPrice, clearCart, removeProduct, totalProducts } = useContext(CartContext)

  return (
    <>
      {
        totalProducts === 0
          ?
          <p><b>No hay productos en el carrito click <Link to='/'>aqui</Link> para ir a comprar</b></p>
          :
          <>
            <div>
              <h1>Página de Checkout</h1>
            </div>
              <div className='cart-container'>
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
                      <div>
                        <p>Cantidad: {product.quantity}</p>
                      </div>
                      <button onClick={() => removeProduct(product)}>Eliminar</button>
                    </div>
                  ))
                }
                <h2>TOTAL:${totalPrice}</h2>
                <button onClick={clearCart}>Borrar todo</button>
                <button>Finalizar compra</button>
              </div>
            </>
      }
          </>
        )

}

      export default Checkout