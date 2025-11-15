import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const endPoint = process.env.REACT_APP_API_URL;

export const getCheckpointQ = createAsyncThunk(
  "getCheckpointQ",
  async ({ user }, rejectWithValue) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.get(`${endPoint}/checkpoints/${user.id}`, config);
      return res.data;
    } catch (error) {
    }
  }
);

export const checkpoint = createAsyncThunk(
  "checkpoint",
  async ({ user, answer }, rejectWithValue) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const res = await axios.get(`${endPoint}/checkpoints/${user.id}`, config);
      if (answer === res.data.answer) {
        localStorage.setItem("isAuthenticated", true);
        window.location = "/";
        return true;
      } else {
        throw new Error("Incorrect answer");
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const resetCheckpoint = createAsyncThunk(
  "resetCheckpoint",
  async ({ empty }, rejectWithValue) => {
    return false;
  }
);
