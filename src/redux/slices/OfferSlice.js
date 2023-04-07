import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../server/firebase';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    content: "",
    status: 'idle',
    error: null
}

export const getOfferStorageContentAsync = createAsyncThunk("getOfferStorageContentAsync", async () => {
    const FirestoreConnection = async () => {
        var result="a";
        const reference = ref(storage, '/teklif-photo.jpeg');
        await getDownloadURL(reference).then((x) => {
            result = x;
        });
        
        return result;
    }
    const data = FirestoreConnection();
    console.log("reduxtaki data:::", data);
    return data;
})

const OfferSlice = createSlice({
    name: "Offer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getOfferStorageContentAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getOfferStorageContentAsync.fulfilled, (state, action) => {
                state.status = "succeed";
                state.content = state.content.concat(action.payload);
            })
            .addCase(getOfferStorageContentAsync.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export const selectOfferContent = (state) => state.Offer.content;
export const selectOfferStatus = (state) => state.Offer.status;
export const selectOfferError = (state) => state.Offer.error;

export default OfferSlice.reducer;