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
      <img className="item-image" src={item.image} alt="item "/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">{item.discount_percentage}%OFF</span>
      
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