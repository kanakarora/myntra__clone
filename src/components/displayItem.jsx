import {useDispatch,useSelector} from "react-redux";
import {bagActions} from "../store/bagSlice";
import { WishListSliceActions } from "../store/wishListSlice";
import { FaHeart } from "react-icons/fa";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { useState } from "react";

const DisplayItem = ({item})=>{
    
    const [wishListItem,setWishListItem] = useState(false);
    const dispatch = useDispatch();
    const bagItems = useSelector(store=>store.bag);
    
   
 
    const elementFound = bagItems.indexOf(item)>=0;

    const handleAddToBag = () => {
      dispatch(bagActions.addToBag(item));
      
    };
  
    const handleRemoveFromBag = () => {
      dispatch(bagActions.removeFromBag(item));
    };
    const handleAddToWishList = ()=>{
      setWishListItem(!wishListItem);
      dispatch(WishListSliceActions.addTowishList(item));
    }
    

return (
    
        <div className="item-container ">
         <div className="item">
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
       
      <span onClick = {handleAddToWishList}>
      
  {!wishListItem ?<IoMdHeartEmpty style={{fontSize:"25px"}}/>:<FaHeart style={{color:"red" ,fontSize:"25px"}}/>}
 
      </span>
     
        {elementFound?
        <button
        type="button"
        className="btn btn-add-bag btn-info"
        onClick={handleRemoveFromBag}
      >
        <AiFillDelete /> Remove from bag
      </button>
        :<button
        type="button"
        className="btn btn-add-bag btn-success"
        onClick={handleAddToBag}
      >
        <GrAddCircle /> Add to Bag
      </button>
}
</div>
</div>
   

    
)
}
export default DisplayItem;