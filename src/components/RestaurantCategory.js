import ItemList from "./itemList";

const RestaurantCategory = ({data})=> {
    console.log(data);
    return <div>
        {/* {Header} */}
        <div className="resCategoryData">
            <div className="resCategoryHeader">
            <span className="resCategoryDataTitle">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
            </div>
             <ItemList items={data.itemCards} />
        </div>
        {/* Accordian Body */}

    </div>
}
export default RestaurantCategory;