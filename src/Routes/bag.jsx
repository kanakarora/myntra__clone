import { useSelector } from "react-redux";
import BagItem from "../components/bagItem";
import BagSummery from "../components/bagSummery";
import { useState } from "react";
import OrderPlaced from "../components/orderPlaced";

const Bag = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const bagItems = useSelector(store => store.bag);
 
  
  return (
    <>
{(()=>{
        if(bagItems.length>0){
          if (!orderPlaced){
                   return(
          <div className="bag-page mt-3">
          <div className="bag-items-container w-50">
            {bagItems.map(item=>(<BagItem item={item} key={item.id}/>))}
          </div>
          <BagSummery  setOrderPlaced={setOrderPlaced} />
          </div>
      )}
       else {
        return <OrderPlaced/>
       }
          
      
    }
    else if (bagItems.length === 0){
     return (
      <div className="w-50 mx-auto  mt-5">
     <h3 className=" p-5">hurry add your favriouts to bag</h3>
     </div>
     )
    }
      
    }
        
      )()}
       </>
    )
   
}

export default Bag;