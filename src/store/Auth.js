import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        logIn: (state,action)=>{
            state.isLoggedIn = true
        },
        logOut: (state,action)=>{
            state.isLoggedIn = false
        }
    }
})

export const {logIn, logOut} = authSlice.actions
export default authSlice.reducer