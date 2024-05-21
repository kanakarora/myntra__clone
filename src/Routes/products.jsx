// import { useState } from "react";
import { useParams } from "react-router";
import DisplayItem from "../components/displayItem";
import { useSelector } from "react-redux";


const Products = () => {
    const { category } = useParams();

    const HomeItems = useSelector(store => store.shoppingItems.items);
    const filteredProducts = HomeItems.filter(item => item.category.toLowerCase() === category);

    return (
        <>
          <div className="items-container">
            {category && filteredProducts.map(item => {
                return ( <div className="col">
                <DisplayItem item={item} key={item.id}/>
                </div>
                )
            })}
            </div>
        </>
    )


}

export default Products;