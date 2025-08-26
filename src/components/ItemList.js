import { CDN_URL } from "../utils/constants";

const ItemList = ({items})=> {
    console.log("items",items);
    return (
    <div>
        {
            items.map((item) =>( 
            <div key={item.card.info.id} className="itemListData">
                <div className="item-header">
                    <img src={CDN_URL + item.card.info.imageId} alt={item.card.info.name}/>
                    <span className="headingItem">{item.card.info.name}</span>
                    <span  className="price">-₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                </div>
                <p>{item.card.info.description}</p>
            </div>
        ))
        }
    </div>
    )
}

export default ItemList;