import { createSlice } from "@reduxjs/toolkit";

const WishListSlice = createSlice({
name:"wishList",
initialState:[],
reducers:{
    addTowishList:(state,action)=>{
       state.push(action.payload);
    },
    removeFromWishList:(state,action)=>{
      const newWishList = state.filter(item=>item.id !==action.payload.id)
      return newWishList;
    }
}
})
export const WishListSliceActions = WishListSlice.actions
export default WishListSlice;