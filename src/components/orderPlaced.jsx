//state will be defined in parent component for conditional component rendering
//u are working on rendering a page after order placed
import Lottie from "lottie-react";
import Confetti from "./confetti.json";
const OrderPlaced = ()=>{
  return <>
     <div className="placedMsg">
        <Lottie className="p-0 m-0 confetti" animationData={Confetti} loop = {true}/>
        <h1>
          your order has placed
        </h1>
        
        </div> 
  </>
}
export default OrderPlaced; 