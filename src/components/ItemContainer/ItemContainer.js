import { useEffect } from "react"
import ItemCount from "../ItemCount/ItemCount"   
import './ItemContainer.scss'


const ItemContainer = ({section}) => {
    const product1 = {
        title: "LOGO RHCP",
        price: 1500,
        image: 'logorhcp.png',
        stock: 5
    }
    const product2 = {
        title: "STICKER FLEA",
        price: 150,
        image: 'flearhcp.png',
        stock: 13
    }

    const logPromise = new Promise ((resolve, reject) =>{
        resolve("La promesa se cumplio correctamente")
    })

    //setSpinner(true)

    logPromise
    .then((data)=> { //cuando la rta es OK
        console.log(data)
    })
    .catch((error)=> { //rta cuando falla
        console.log("la llamada fallo")
    })
    .finally( () => { //se ejecuta SIEMPRE
        //setSpinner(false)
    })
    
    
    useEffect( () => {
        /* fetch().then(
            setProduct()
        ) */
    })

    return (
        <div className="list-product">
            <h2>{section}</h2>
            <ItemCount data={product1} />
            <ItemCount data={product2} />
        </div>
    )
}

export default ItemContainer