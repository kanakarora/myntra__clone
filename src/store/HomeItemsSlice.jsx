import { createSlice } from "@reduxjs/toolkit";

const HomeItemsSlice = createSlice({
    name: 'shoppingItems',
    initialState: {
        fetchDone: false,
        currentlyFetching: false,
        items: [],
    },
    reducers: {
 
        fetchingStarted:(state)=>{
           state.currentlyFetching = true;
        },
        fetchingFinished:(state)=>{
            state.currentlyFetching = false; 
        },
        fetchDone:(state)=>{
           state.fetchDone = true;
        },
        addInitialItems: (state, action) => {
            state.items = action.payload
        }
    }
})
export const HomeItemsActions = HomeItemsSlice.actions
export default HomeItemsSlice;