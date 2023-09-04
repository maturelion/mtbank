import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/AuthSlice";
import userReducer from "../feature/user/UserSlice";
import walletReducer from "../feature/wallet/WalletSlice";
import pocketReducer from "../feature/pocket/PocketSlice";
import messageReducer from "../feature/message/messageSlice";
import inputReducer from "../feature/inputError/inputErrorSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    pocket: pocketReducer,
    wallet: walletReducer,
    message: messageReducer,
    inputError: inputReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
