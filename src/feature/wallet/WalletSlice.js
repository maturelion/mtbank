import { createSlice } from "@reduxjs/toolkit";
import { getUserBalance } from "./WalletActions";

const initialState = {
    loading: false,
    balance: 0, // for wallet array
    error: null,
    success: false, // for monitoring the registration process.
  }

const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {},
    extraReducers:{
        [getUserBalance.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.success = true
            state.balance = payload.data.balance
        },
        [getUserBalance.pending]: (state, {payload}) => {
            state.loading = true
        },
        [getUserBalance.rejected]: (state, {payload}) => {
            state.loading = false
            state.balance = payload
        }
    }
})

export default walletSlice.reducer