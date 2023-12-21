import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchYoutube = createAsyncThunk("youtube", async () => {
  const api_key = process.env.REACT_APP_YOUTUBE_API;
  const pid = process.env.REACT_APP_YOUTUBE_LIST;
  const num = 11;
  const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;

  const data = await fetch(baseURL);
  const json = await data.json();
  return json.items;
});

const youtubeSlice = createSlice({
  name: "youtube",
  initialState: {
    data: [],
    isLoading: false,
  },
  extraReducers: {
    [fetchYoutube.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchYoutube.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [fetchYoutube.rejected]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
  },
});

export default youtubeSlice.reducer;
