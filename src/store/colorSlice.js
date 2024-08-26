import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPrimaryColor = createAsyncThunk(
    'color/fetchColor',
    async () => {
        const response = await fetch('https://random-data-api.com/api/color/random_color'); 
        const color = await response.json();
        return color.hex_value; 
    }
);

const colorSlice = createSlice({
    name: 'color',
    initialState: {
        primaryColor: '#f5f5f5',
        loading: true,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPrimaryColor.pending, (state) => {
                state.loading = 'loading';
            })
            .addCase(fetchPrimaryColor.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.primaryColor = action.payload;
            })
            .addCase(fetchPrimaryColor.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.error.message;
            });
    },
});

export default colorSlice.reducer;
