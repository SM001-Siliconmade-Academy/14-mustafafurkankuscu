import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: "Marka",
    isChosen:false,
}

export const FilterSlice = createSlice({
    name: 'Filter',
    initialState,
    reducers: {
        ChangeFilterText: (state, action) => {
            state.text = action.payload;
            state.isChosen=true;
        }
    }
})

export const { ChangeFilterText } = FilterSlice.actions

export default FilterSlice.reducer