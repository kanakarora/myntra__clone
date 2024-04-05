import { useSelector } from "react-redux";

const BagSummary = ({setOrderPlaced}) => {
 const bagItems = useSelector(store=>store.bag);


 const totalItems=bagItems.length
 let totalMRP = 0;
 let totalDiscount = 0;
 let CONVENIENCE_FEES = 99;


bagItems.forEach(item=>{
   totalMRP += item.original_price;
   totalDiscount += item.original_price - item.current_price; 
 })
 let finalPayment =  totalMRP-totalDiscount+CONVENIENCE_FEES

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItems} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order" onClick={()=>setOrderPlaced(true)}>
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;