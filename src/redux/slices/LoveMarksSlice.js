import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from "../../server/firebase";

const initialState = {
    content: [],
    status: 'idle',
    error: null
};

export const getLoveMarksContentAsync = createAsyncThunk("getLoveMarksContentAsync", async () => {

    const FirestoreConnection = async () => {
        var result = [];
        const usersRef = collection(db, "lovemarks");
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

const LoveMarksSlice = createSlice({
    name: "LoveMark",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getLoveMarksContentAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getLoveMarksContentAsync.fulfilled, (state, action) => {
                state.status = "succeed";
                state.content = state.content.concat(action.payload);
            })
            .addCase(getLoveMarksContentAsync.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export const selectLoveMarkContent = (state) => state.LoveMark.content;
export const selectLoveMarkStatus = (state) => state.LoveMark.status;
export const selectLoveMarkError = (state) => state.LoveMark.error;

export default LoveMarksSlice.reducer;