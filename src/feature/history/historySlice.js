import { createSlice } from "@reduxjs/toolkit";
import { getUserHistories } from "./historyActions";

const initialState = {
  isLoadinggetHistory: false,
  histories: [], // for history array
  error: null,
  success: false, // for monitoring the registration process.
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserHistories.fulfilled]: (state, { payload }) => {
      state.isLoadinggetHistory = false;
      state.success = true;
      state.histories = payload;
    },
    [getUserHistories.pending]: (state, { payload }) => {
      state.isLoadinggetHistory = true;
    },
    [getUserHistories.rejected]: (state, { payload }) => {
      state.isLoadinggetHistory = false;
      state.histories = payload;
    },
  },
});

export default historySlice.reducer;
