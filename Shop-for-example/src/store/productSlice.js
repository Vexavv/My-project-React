import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    product: [],
    status: null,
    error: '',

}
export const fetchAsyncProduct = createAsyncThunk(
    'product/fetchAsyncProduct',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch('shop.json');
            return await response.json();

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(fetchAsyncProduct.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAsyncProduct.fulfilled, (state, action) => {
                state.product = action.payload;
                state.status = 'loaded';
            })
            .addCase(fetchAsyncProduct.rejected, (state, action) => {
                state.error = action.payload;
                state.status = 'loaded';
            })

    }
})



export default productSlice.reducer;