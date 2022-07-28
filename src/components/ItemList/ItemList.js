import ItemProduct from "../ItemProduct/ItemProduct";

const ItemList = ({dataProducts}) =>{
return(
    <>
        {dataProducts.map( (product) => {
            return <ItemProduct key={product.id} data={product}></ItemProduct>
        })}
    </>
)
}

export default ItemList