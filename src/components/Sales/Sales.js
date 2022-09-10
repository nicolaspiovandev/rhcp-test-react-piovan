import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { addDoc, collection } from "firebase/firestore"
import db from '../../firebaseConfig'
import { useForm } from 'react-hook-form'
import "../Sales/Sales.js"
import "../Sales/Sales.scss"

const Sales = () => {


    const [confirm, setConfirm] = useState(false)
    const [name, setName] = useState("")
    const [direction, setDirection] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState(0)
    const [userId, setUserId] = useState("")

    const { register, formState: { errors }, handleSubmit } = useForm()
    const { cartProducts, clearCart, totalProducts, totalPrice } = useContext(CartContext)

    const order = {
        buyer: {
            name: name,
            direction: direction,
            email: email,
            phoneNumber: phoneNumber
        },
        items: cartProducts.map(p => ({ id: p.id, title: p.title, price: p.price, quantity: p.quantity })),
        total: totalProducts,
    }

    const confirmedOrder = () => {
        clearCart()
        const orderCollection = collection(db, "orders")
        addDoc(orderCollection, order)
            .then(({ id }) => {
                console.log(id)
                setUserId(id)
                setConfirm(true)
            })
    }

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const directionHandler = (e) => {
        setDirection(e.target.value)
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const phoneHandler = (e) => {
        setPhoneNumber(e.target.value)
    }

    return (
        <div className='order-container'>
            {
                confirm
                    ?
                    <div className='end'>
                        <h3>Que disfrute su compra!!!</h3>
                        <p>Su codigo de seguimiento es:</p>
                        <b>{userId}</b>
                    </div>
                    :
                    <div className='last-card'>
                        <div className='selected-products'>
                            <h3>Su compra:</h3>
                            {cartProducts.map((product) => <p key={product.id} product={product.title}> {product.title}: {product.quantity} unidades ${product.price * product.quantity}</p>)}
                            Total: ${totalPrice}
                        </div>
                        <p><b>Ingrese sus datos para finalizar:</b></p>
                        <div>
                            <form className='form-container' onSubmit={handleSubmit(confirmedOrder)}>

                                <label>Nombre y Apellido:</label>
                                <input
                                    type="text"

                                    {
                                    ...register('name', {
                                        onChange: (e) => { nameHandler(e) },
                                        required: true,
                                    })
                                    }
                                />

                                {errors.name?.type === 'required' && <p>El campo nombre es requerido</p>}


                                <label>Direccion:</label>
                                <input
                                    type="text"

                                    {
                                    ...register('address', {
                                        onChange: (e) => { directionHandler(e) },
                                        required: true,
                                    })
                                    }
                                />

                                {errors.name?.type === 'required' && <p>El campo direccion es requerido</p>}

                                <label>Correo electronico:</label>
                                <input
                                    type="email"

                                    {
                                    ...register('email', {
                                        onChange: (e) => { emailHandler(e) },
                                        required: true,
                                    })
                                    }
                                />

                                {errors.name?.type === 'required' && <p>El campo correo electronico es requerido</p>}

                                <label>Numero de telefono:</label>
                                <input
                                    type="number"

                                    {
                                    ...register('phone', {
                                        onChange: (e) => { phoneHandler(e) },
                                        required: true,
                                    })
                                    }
                                />

                                {errors.name?.type === 'required' && <p>El campo numero de telefono es requerido</p>}
                                <div className='btn-buy'>
                                    <button type="submit">CONFIRMAR</button>
                                </div>
                            </form>
                            <div className='order-buttons'>
                                <div>
                                </div>
                                <div className='btn-buy'>
                                    <Link to="/" ><button>SEGUIR COMPRANDO</button></Link>
                                </div>
                            </div>

                        </div>
                    </div>
            }
        </div>
    )
}

export default Sales