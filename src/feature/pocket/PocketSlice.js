import { createSlice } from "@reduxjs/toolkit";
import { getUserPockets } from "./PocketActions";

const initialState = {
  loadinggetUserPockets: false,
  pockets: [], // for pocket array
  error: null,
  success: false, // for monitoring the registration process.
};

const pocketSlice = createSlice({
  name: "pocket",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserPockets.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.pockets = payload;
    },
    [getUserPockets.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getUserPockets.rejected]: (state, { payload }) => {
      state.loading = false;
      state.pockets = payload;
    },
  },
});

export default pocketSlice.reducer;
