import { createSlice } from "@reduxjs/toolkit";

const initialState={
    text:"",
    isChange:false
}

export const SearchSlice=createSlice({
    name:'Search',
    initialState,
    reducers:{
        ChangeSearchText:(state,action)=>{
            state.text=action.payload;
            state.isChange=true;
        }
    }
})

export const {ChangeSearchText}=SearchSlice.actions

export default SearchSlice.reducer