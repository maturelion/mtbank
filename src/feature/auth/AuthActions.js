import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setInputError } from "../inputError/inputErrorSlice";
import { setMessage } from "../message/messageSlice";
import { resetCheckpoint } from "../security/CheckpointActions";

const endPoint = process.env.REACT_APP_API_URL;

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ username, email, password1, password2, referral }, thunkApi) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        `${endPoint}/rest-auth/registration/`,
        { username, email, password1, password2, referral },
        config
      );
      return res;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkApi.dispatch(setMessage(message));
      thunkApi.dispatch(setInputError(error.response && error.response.data));
      return thunkApi.rejectWithValue(await error.json());
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkApi) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        `${endPoint}/rest-auth/login/`,
        { username, password },
        config
      );
      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      return res;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkApi.dispatch(setMessage(message));
      thunkApi.dispatch(setInputError(error.response && error.response.data));
      return thunkApi.rejectWithValue(await error.json());
    }
  }
);

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async ({ old_password, new_password1, new_password2 }, thunkApi) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.post(
        `${endPoint}/rest-auth/password/change/`,
        { old_password, new_password1, new_password2 },
        config
      );
      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      return res;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkApi.dispatch(setMessage(message));
      thunkApi.dispatch(setInputError(error.response && error.response.data));
      return thunkApi.rejectWithValue(await error.json());
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async ({ empty }, thunkApi) => {
    try {
      const allThemes = localStorage.getItem("all-themes");
      localStorage.clear();
      localStorage.setItem("all-themes", allThemes);
      thunkApi.dispatch(resetCheckpoint({}));
    } catch (error) {
      console.log(error);
    }
  }
);
