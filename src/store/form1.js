import { createSlice } from "@reduxjs/toolkit";
import { postFormData } from "../api";

const initialFormState = {
    data: {
      fullname: '',
      email: '',
      phone: '',
      message: '',
      color: '#000000',
    },
    state:{
      loading:false,
      error:false,
    }
};

const formSlice = createSlice({
name: 'form',
initialState: initialFormState,
reducers: {
    setFormData: (state, action) => {
    state.data = action.payload;
    },
},
extraReducers:(builder)=>{
  builder
    .addCase(postFormData.pending, (state)=>{
      state.state.loading = true
      state.state.error = null
    })
    .addCase(postFormData.fulfilled,(state,action)=>{
      state.state.loading = false
      state.data = action.payload
    })
    .addCase(postFormData.rejected,(state,action)=>{
      state.state.loading = false
      state.state.error = action.payload
    })
}
});
export const {setFormData} = formSlice.actions
export default formSlice.reducer