import DisplayItem from "../components/displayItem";
import { useSelector } from "react-redux";

const Search = ()=>{
    const searchTerm = useSelector(store=>store.searchTerm);
    const HomeItems = useSelector(store=>store.shoppingItems.items);
    
   const filteredCategory = HomeItems.filter(item=> {
    if(searchTerm === ""){
    return item;
    }
    else if( item.item_name.toLowerCase().includes(searchTerm.toLowerCase())){
       return item ;
    }
  
}

 
   ) 
    
    return (
        <main>
           
       <div className="items-container">
        {filteredCategory.length > 0 ? filteredCategory.map(item=>{
        return <DisplayItem item={item} key={item.id}/>}) :<p className="m-auto">no searches found</p>
        }
        
        </div>
        </main> 
    )
}
export default Search;