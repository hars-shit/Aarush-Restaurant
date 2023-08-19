import { createSlice } from "@reduxjs/toolkit";

const shop=createSlice({
    name:'slice5',
    initialState:[],
    reducers:{
        slice5(state,action){
            state.push(action.payload);
        },
    }
})
export default shop.reducer;
export const {slice5}=shop.actions;