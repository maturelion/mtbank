import { createSlice } from "@reduxjs/toolkit";
import { getCheckpointQ, checkpoint, resetCheckpoint } from "./CheckpointActions";

const initialState = {
  loadingCheckpoint: false,
  isAuthenticated: false,
  checkpointQ: {},
  error: null,
};

const checkpointSlice = createSlice({
  name: "checkpoint",
  initialState,
  reducers: {},
  extraReducers: {
    [getCheckpointQ.fulfilled]: (state, { payload }) => {
      state.loadingCheckpoint = false;
      state.checkpointQ = payload;
    },
    [getCheckpointQ.pending]: (state, { payload }) => {
      state.loadingCheckpoint = true;
    },
    [getCheckpointQ.rejected]: (state, { payload }) => {
      state.loadingCheckpoint = false;
      state.error = payload;
    },
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
