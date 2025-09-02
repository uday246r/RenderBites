import { useState } from "react";
import ItemList from "./itemList";

const RestaurantCategory = ({ data, showItems, setShowIndex })=> {
    const handleClick = () => {
        setShowIndex();
    }
    return <div>
        {/* {Header} */}
        <div className="resCategoryData">
            <div className="resCategoryHeader" onClick={handleClick}>
            <span className="resCategoryDataTitle">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
            </div>
            {showItems && <ItemList items={data.itemCards} />}
        </div>
        {/* Accordian Body */}

    </div>
}
export default RestaurantCategory;