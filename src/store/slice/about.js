import { createSlice } from "@reduxjs/toolkit";

const about=createSlice({
    name:'slice2',
    initialState:[],
    reducers:{
        slice2(state,action){
            state.push(action.payload);
        },
    }
})
export default about.reducer;
export const {slice2}=about.actions;