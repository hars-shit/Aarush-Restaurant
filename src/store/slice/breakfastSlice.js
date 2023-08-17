import { createSlice } from "@reduxjs/toolkit";

const breakfastSlice=createSlice({
    name:'slice1',
    initialState:[],
    reducers:{
        slice1_Push(state,action){
            state.push(action.payload);
        },
        slice1_Pop(state,action){
            state.pop(action.payload);
        }
    }
})
export default breakfastSlice.reducer;
export const {slice1_Push}=breakfastSlice.actions;
export const {slice1_Pop}=breakfastSlice.actions;