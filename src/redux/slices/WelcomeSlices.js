import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from "../../server/firebase";

const initialState = {
    content: [],
    status: 'idle',
    error: null
};

export const getContentAsync = createAsyncThunk("getContentAsync", async () => {
   
    const FirestoreConnection = async () => {
        var result=[];
        const usersRef =collection(db, "welcome");
        const q = query(usersRef);
        await getDocs(q)
            .then((querySnapshot) => {
                const card = [];
                querySnapshot.forEach((doc) => {
                    card.push({ icon: doc.data().icon, text: doc.data().text, image: doc.data().image, ...doc.data() })
                })
                console.log("kart",card);
                result=card;
            })
        
        return result;

    }

    const data=FirestoreConnection();
    return data;



})

const WelcomeSlice = createSlice({
    name: "Welcome",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getContentAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getContentAsync.fulfilled, (state, action) => {
                state.status = "succeed";
                state.content = state.content.concat(action.payload);
            })
            .addCase(getContentAsync.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export const selectContent = (state) => state.Welcome.content;
export const selectStatus = (state) => state.Welcome.status;
export const selectError = (state) => state.Welcome.error;

export default WelcomeSlice.reducer;