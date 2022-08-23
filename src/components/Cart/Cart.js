import { CartContext } from "../../context/CartContext"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import Modal from "../Modal/Modal.js"
import db from '../../firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'


const Checkout = () => {

  const [showModal, setShowModal] = useState(false)
  const [success, setSuccess] = useState()
  
  
  /* const [order, setOrder] = useState({
    items: cartProducts.map((product) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price
      }
    }),
    buyer: {},
    date: new Date().toLocaleString(),
    total: 0
  }) */
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  })

  const handleChange = (e) => {
    setFormData({ ...setFormData, [e.target.name]: e.target.value })
  }

  /* const submitData = (e) =>{
    e.preventDefault()
    pushData({...order, buyer: formData})
  } */

  const pushData = async (newOrder) =>{
    const collectionOrder = collection(db, 'ordenes')
    const orderDoc = await addDoc(collectionOrder, newOrder)
    setSuccess(orderDoc.id)

    console.log('orden generada', orderDoc)
  }

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
              <div><h2>TOTAL:${totalPrice}</h2>
                <button onClick={clearCart}>Borrar todo</button>
                <button onClick={() => setShowModal(true)}>Finalizar compra</button>
              </div>
              {showModal &&
                <Modal title="Datos de contacto" close={() => setShowModal()}>
                  <form /* onSubmit={submitData} */>
                    <input type='text' name='name' placeholder='Ingrese el nombre' onChange={handleChange} value={formData.name}></input>
                    <input type='number' name='phone' placeholder='Ingrese el teléfono' onChange={handleChange} value={formData.phone}></input>
                    <input type='email' name='email' placeholder='Ingrese el email' onChange={handleChange} value={formData.email}></input>
                    <button type="submit">Enviar</button>
                  </form>
                </Modal>
              }
            </div>
          </>
      }
    </>
  )

}

export default Checkout