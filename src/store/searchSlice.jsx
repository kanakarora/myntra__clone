import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"searchTerm",
    initialState:"",
    reducers:{
        searchCategory:(state,action)=>{
          state=action.payload;
          return state;
        }
    }
})
export default searchSlice;
export const searchActions = searchSlice.actions; 