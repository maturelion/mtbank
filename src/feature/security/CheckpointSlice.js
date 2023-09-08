import { createSlice } from "@reduxjs/toolkit";
import { checkpoint, resetCheckpoint } from "./CheckpointActions";

const initialState = {
  loadingCheckpoint: false,
  isAuthenticated: false,
  error: null,
};

const checkpointSlice = createSlice({
  name: "checkpoint",
  initialState,
  reducers: {},
  extraReducers: {
    [checkpoint.fulfilled]: (state, { payload }) => {
      state.loadingCheckpoint = false;
      state.isAuthenticated = payload;
    },
    [checkpoint.pending]: (state, { payload }) => {
      state.loadingCheckpoint = true;
    },
    [checkpoint.rejected]: (state, { payload }) => {
      state.loadingCheckpoint = false;
      state.error = payload;
    },
    [resetCheckpoint.fulfilled]: (state, { payload }) => {
      state.loadingCheckpoint = false;
      state.isAuthenticated = payload;
    },
    [resetCheckpoint.pending]: (state, { payload }) => {
      state.loadingCheckpoint = true;
    },
    [resetCheckpoint.rejected]: (state, { payload }) => {
      state.loadingCheckpoint = false;
      state.error = payload;
    },
  },
});

export default checkpointSlice.reducer;
