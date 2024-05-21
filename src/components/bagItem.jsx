import { RiDeleteBin5Fill } from "react-icons/ri"
import { useDispatch } from "react-redux"
import { bagActions } from "../store/bagSlice";
const BagItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleItemRemove = () => {
    dispatch(bagActions.removeFromBag(item))
  }

  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src={item.images[0]} />
      </div>
      <div className="item-right-part">
        <div className="company">{item.brand}</div>
        <div className="item-name">{item.title}</div>
        <div className="item-name">{item.description}</div>
        <div className="price-container">
          <span className="current-price">Rs {item.price}</span>
          
          <span className="discount-percentage">
            ({item.discountPercentage}% OFF)
          </span>
        </div>
        <div className="return-period">
          <span className="return-period-days">10 days</span>{" "}
          return available
        </div>
       
          <span className="delivery-details-days mx-2">delivered within 5 days</span>
        
      </div>

      <div className="remove-from-cart" onClick={handleItemRemove}>
        <RiDeleteBin5Fill />
      </div>
    </div>
  );
}
export default BagItem;