import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../api";

const initialState = {
    loading : true,
    error : false,
    data : null
    
}

const getDataSlice = createSlice({
    name:'get',
    initialState:initialState,
    extraReducers:(builder)=>{
        builder
          .addCase(getData.pending, (state)=>{
            state.loading = true
            state.error = null
          })
          .addCase(getData.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
          })
          .addCase(getData.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
          })
        }      
})

export default getDataSlice.reducer