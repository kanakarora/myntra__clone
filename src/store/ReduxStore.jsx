import {configureStore} from "@reduxjs/toolkit";
import bagSlice from "./bagSlice"
import HomeItemsSlice from "./HomeItemsSlice";
import WishListSlice from "./wishListSlice";
import searchSlice from "./searchSlice";



const myntraStore = configureStore({
    reducer :{shoppingItems:HomeItemsSlice.reducer,
        bag:bagSlice.reducer,
        wishList:WishListSlice.reducer, 
        searchTerm:searchSlice.reducer
    }
    
})

 

export default myntraStore;