import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../slices/UserSlices";
import WelcomeReducer from "../slices/WelcomeSlices";
import BannersReducer from "../slices/BannersSlice";
import MyOffersReducer from "../slices/MyOffersSlices";
import ClickWinItemsReducer from "../slices/ClickWinItemsSlice";
import LoveMarksReducer from "../slices/LoveMarksSlice";
import  SearchReducer  from "../slices/SearchSlices";
import  FilterReducer  from "../slices/FilterSlices";
import OfferReducer from "../slices/OfferSlice";



export const store = configureStore({
    reducer: {
        User:UserReducer,
        Welcome:WelcomeReducer,
        Banner:BannersReducer,
        MyOffer:MyOffersReducer,
        ClickWinItem:ClickWinItemsReducer,
        LoveMark:LoveMarksReducer,
        Search:SearchReducer,
        Filter:FilterReducer,
        Offer:OfferReducer,
       
    },
})