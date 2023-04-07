import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from "../../server/firebase";

const initialState = {
    content: [],
    status: 'idle',
    error: null
};

export const getClickWinItemsContentAsync = createAsyncThunk("getClickWinItemsContentAsync", async () => {

    const FirestoreConnection = async () => {
        var result = [];
        const usersRef = collection(db, "clickWinItems");
        const q = query(usersRef);
        await getDocs(q)
            .then((querySnapshot) => {
                const card = [];
                querySnapshot.forEach((doc) => {
                    card.push({ id: doc.id, ...doc.data() });
                });
                result = card;
            });
        return result;
    }

    const data = FirestoreConnection();
    return data;



})

const ClickWinItemsSlice = createSlice({
    name: "ClickWinItem",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getClickWinItemsContentAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getClickWinItemsContentAsync.fulfilled, (state, action) => {
                state.status = "succeed";
                state.content = state.content.concat(action.payload);
            })
            .addCase(getClickWinItemsContentAsync.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export const selectClickWinItemContent = (state) => state.ClickWinItem.content;
export const selectClickWinItemStatus = (state) => state.ClickWinItem.status;
export const selectClickWinItemError = (state) => state.ClickWinItem.error;

export default ClickWinItemsSlice.reducer;