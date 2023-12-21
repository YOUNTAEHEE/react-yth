import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchActive = createAsyncThunk("active", async () => {
  const data = await fetch(`${process.env.PUBLIC_URL}/DB/departmentCon1.json`);
  const json = await data.json();
  return json;
});

const activeSlice = createSlice({
  name: "active",
  initialState: {
    data: [],
    isLoading: false,
  },
  extraReducers: {
    [fetchActive.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchActive.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [fetchActive.rejected]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
  },
});

export default activeSlice.reducer;
