import { useSelector } from "react-redux";


import WishListItems from "../components/wishlistItems";

const WishList = () => {
    const wishList = useSelector(store => store.wishList);

     return (
        <main>

            <div className="items-container">
                {wishList.length > 0 ? wishList.map(item => <WishListItems item={item} />) : (<h3 className="m-auto">nothing added to wishlist</h3>)}
            </div>
        </main>
    )

}

export default WishList;