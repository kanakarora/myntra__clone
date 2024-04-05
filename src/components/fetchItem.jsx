import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HomeItemsActions } from "../store/HomeItemsSlice";


const FetchItems = ()=>{
    const fetchDone = useSelector((store) => store.shoppingItems.fetchDone);
    
    const dispatch = useDispatch()
 
    useEffect(() => {
        
        if (fetchDone) return;
    
        const controller = new AbortController();
        const signal = controller.signal;
    
        
        dispatch(HomeItemsActions.fetchingStarted());
      
        fetch("http://localhost:8080/items", { signal })
          .then((res) => res.json())
          .then(({ items }) => {
            dispatch(HomeItemsActions.fetchDone());
            dispatch(HomeItemsActions.fetchingFinished());
            dispatch(HomeItemsActions.addInitialItems(items[0]));
          })
          .catch((err)=>{
            console.error(`Download error ${err.message}`)
          })
         
        return () => {
          controller.abort();
        };
      }, [fetchDone,dispatch]);
   
    return(
   <></>
    )
}

export default FetchItems;