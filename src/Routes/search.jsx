import DisplayItem from "../components/displayItem";
import { useSelector } from "react-redux";

const Search = ()=>{
    const searchTerm = useSelector(store=>store.searchTerm);
    const HomeItems = useSelector(store=>store.shoppingItems.items);
    
   const filteredCategory = HomeItems.filter(item=> {
    if(searchTerm === ""){
    return item;
    }
    else if( item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||  item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.category.toLowerCase().includes(searchTerm .toLowerCase()) ){
       return item ;
    }
  
}

 
   ) 
    
    return (
        
           
       <div className="items-container container-fluid">
        {filteredCategory.length > 0 ? filteredCategory.map(item=>{
        return <DisplayItem item={item} key={item.id}/>}) :<p className="m-auto">no searches found</p>
        }
        
        </div>
       
    )
}
export default Search;