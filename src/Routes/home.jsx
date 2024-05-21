import { useState } from "react";
import DisplayItem from "../components/displayItem"
import {useSelector} from "react-redux";




const Home = ()=>{
  const items = useSelector(store=>store.shoppingItems.items)
 
   return (
     <div className="items-container container-fluid">
   
       {items.map((item)=>
       {return(
       <div key={item.id}><DisplayItem item={item} /></div>
       )}
       )}
       
       
         </div>
   )
  
}
export default Home;