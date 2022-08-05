import './ItemDetail.scss'


const ItemDetail = ({ data }) => {

    return (
        <div>
            <div className='card-detail'>
                <img src={`/assets/${data.image}`} alt="imagen productos"></img>
                <p>{data.title}</p>
                <p>{data.category}</p>
            </div>
            <div className='price-detail'>
                <span>$ {data.price}</span>
            </div>
        </div>

    )
}

export default ItemDetail