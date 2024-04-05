import { useSelector } from "react-redux";
import BagItem from "../components/bagItem";
import BagSummery from "../components/bagSummery";
import { useState } from "react";
import OrderPlaced from "../components/orderPlaced";

const Bag = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const bagItems = useSelector(store => store.bag);

  return (
    <main>
      {orderPlaced ?
        <OrderPlaced />
        : (
          <div class="bag-page">
            <div class="bag-items-container">
             
              {bagItems.length > 0 ? bagItems.map(item => (<BagItem item={item} />)) : (<h3>bag is empty <br />hurry add your favriouts to bag</h3>)}
            </div>
            <BagSummery setOrderPlaced={setOrderPlaced} />

          </div>
        )
      }
    </main>)
}


export default Bag;