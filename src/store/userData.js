import { createSlice } from "@reduxjs/toolkit";

const userData = {
    name : null,
    Email: null
}

const userDataSlice = createSlice({
    name:'userSlice',
    initialState:userData,
    reducers:{
        setData:(state,action) => {
            state.name = action.payload.name;
            state.Email = action.payload.Email;
        }
    }
})

export const {setData} = userDataSlice.actions
export default userDataSlice.reducer