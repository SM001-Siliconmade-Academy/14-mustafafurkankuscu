import { createSlice } from "@reduxjs/toolkit";

const initialState={
    username:"furkan",
    email:"kuscuf15@gmail.com",
    password:"123456"
}

export const UserSlice=createSlice({
    name:'User',
    initialState,
    reducers:{
        ChangeUsername:(state,action)=>{
            state.username=action.payload
        },
        ChangeEmail:(state,action)=>{
            state.email=action.payload
        },
        ChangePassword:(state,action)=>{
            state.password=action.payload
        }
    }
})

export const {ChangeUsername,ChangeEmail,ChangePassword}=UserSlice.actions

export default UserSlice.reducer