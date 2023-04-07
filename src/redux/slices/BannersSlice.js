import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from "../../server/firebase";

const initialState = {
    content: [],
    status: 'idle',
    error: null
};

export const getBannerContentAsync = createAsyncThunk("getBannerContentAsync", async () => {

    const FirestoreConnection = async () => {
        var result = [];
        const usersRef = collection(db, "banners");
        const q = query(usersRef);
        await getDocs(q)
            .then((querySnapshot) => {
                const card = [];
                querySnapshot.forEach((doc) => {
                    card.push({ id: doc.visitUrl, ...doc.data() });
                });
                result = card;
            });
        return result

    }

    const data = FirestoreConnection();
    return data;



})

const BannersSlice = createSlice({
    name: "Banner",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBannerContentAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getBannerContentAsync.fulfilled, (state, action) => {
                state.status = "succeed";
                state.content = state.content.concat(action.payload);
            })
            .addCase(getBannerContentAsync.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export const selectBannerContent = (state) => state.Banner.content;
export const selectBannerStatus = (state) => state.Banner.status;
export const selectBannerError = (state) => state.Banner.error;

export default BannersSlice.reducer;