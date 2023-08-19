import { createSlice } from "@reduxjs/toolkit";

const contact=createSlice({
    name:'slice3',
    initialState:[],
    reducers:{
        slice3(state,action){
            state.push(action.payload);
        },
    }
})
export default contact.reducer;
export const {slice3}=contact.actions;