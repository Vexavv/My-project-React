import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    reviews: [],
    status: null,
    error: '',

}
export const fetchAsyncReviews = createAsyncThunk(
    'reviews/fetchAsyncReviews',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            return await response.json();

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(fetchAsyncReviews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAsyncReviews.fulfilled, (state, action) => {
                state.reviews = action.payload;
                state.status = 'loaded';
            })
            .addCase(fetchAsyncReviews.rejected, (state, action) => {
                state.error = action.payload;
                state.status = 'loaded';
            })

    }
})



export default reviewsSlice.reducer;