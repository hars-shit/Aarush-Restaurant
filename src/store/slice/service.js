import { createSlice } from "@reduxjs/toolkit";

const service=createSlice({
    name:'slice4',
    initialState:[],
    reducers:{
        slice4(state,action){
            state.push(action.payload);
        },
    }
})
export default service.reducer;
export const {slice4}=service.actions;