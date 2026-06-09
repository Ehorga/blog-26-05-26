import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

export const getAllUsersAsync = createAsyncThunk('users/getAllUsers', async (args , thunkAPI) => {
    try {
        await response.data.user;
    } catch (error) {
        return thunkAPI.rejectWithValue(error?.message || 'Users not found');
    }
});

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        error: null,
        isPending: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllUsersAsync.pending, (state) => {
            state.isPending = true;
            state.error = null;
        });
        builder.addCase(getAllUsersAsync.fulfilled, (state, action) => {
            state.isPending = false;
            state.users = action.payload;
        });
        builder.addCase(getAllUsersAsync.rejected, (state, action) => {
            state.isPending = false;
            state.error = action.payload;
        });
    }
});
export default userSlice.reducer;