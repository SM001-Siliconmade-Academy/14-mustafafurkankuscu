import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from "../../server/firebase";

const initialState = {
    content: [],
    status: 'idle',
    error: null
};

export const getMyOffersContentAsync = createAsyncThunk("getMyOffersContentAsync", async () => {

    const FirestoreConnection = async () => {
        var result = [];
        const usersRef = collection(db, "myOffers");
        const q = query(usersRef);
        await getDocs(q)
            .then((querySnapshot) => {
                const card = [];
                querySnapshot.forEach((doc) => {
                    card.push({ id: doc.id, ...doc.data() });
                });
                result=card;
            });
        return result;
    }

    const data = FirestoreConnection();
    return data;



})

const MyOffersSice = createSlice({
    name: "MyOffer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMyOffersContentAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getMyOffersContentAsync.fulfilled, (state, action) => {
                state.status = "succeed";
                state.content = state.content.concat(action.payload);
            })
            .addCase(getMyOffersContentAsync.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export const selectMyOfferContent = (state) => state.MyOffer.content;
export const selectMyOfferStatus = (state) => state.MyOffer.status;
export const selectMyOfferError = (state) => state.MyOffer.error;

export default MyOffersSice.reducer;