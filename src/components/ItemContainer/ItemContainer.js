import { useEffect } from "react"
import ItemProduct from "../ItemProduct/ItemProduct"


const ItemContainer = ({section}) => {
    const product1 = {
        title: "Logo RHCP",
        price: 1500,
        image: 'logorhcp.png',
        stock: 5
    }
    const product2 = {
        title: "Sticker FLEA",
        price: 150,
        image: 'flearhcp.png',
        stock: 0
    }

    useEffect( () => {
        /* fetch().then(
            setProduct()
        ) */
    })

    return (
        <div className="list-product">
            <h2>{section}</h2>
            <ItemProduct data={product1} />
            <ItemProduct data={product2} />
        </div>
    )
}

export default ItemContainer