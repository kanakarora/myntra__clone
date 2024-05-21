import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { WishListSliceActions } from "../store/wishListSlice";
const WishListItems = ({item})=>{
    const dispatch = useDispatch();
    const handleremoveFromWishList = ()=>{
        dispatch(WishListSliceActions.removeFromWishList(item))
    }
    return (
    
        <div className="item-container">
        <img className="item-image" src={item.images[0]} alt="item image"/>
        
        <div className="company-name">{item.brand}</div>
        <div className="item-name">{item.title}</div>
        <div className="mt-2 text-secondary">
          <span>{item.description}</span></div>
        <div className="price">
            <span className="current-price">Rs {item.price}</span>
            
            <span className="discount">{item.discountPercentage} %oFF</span>
            <div className="rating mt-2">{item.rating} ⭐ </div>
            <div className="text-dark mt-2">{item.stock} left</div>
        </div>
      <div onClick = {handleremoveFromWishList}>
      <span>
     <FaRegHeart/>
</span>
<span>remove from wishlist</span>
</div>
       </div>
     
     
)}
export default WishListItems