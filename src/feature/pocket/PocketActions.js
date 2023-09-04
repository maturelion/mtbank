import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const endPoint = process.env.REACT_APP_API_URL

export const getUserPockets = createAsyncThunk(
    "getUserPockets",
    async({user}, rejectWithValue) => {
        try {
            const config = {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem("token")}`
                  
                },
              }
              const res = await axios.get(
                `${endPoint}/pockets/?user=${user.id}`,
                config
              )
              return res.data
        } catch (error) {
            console.log(error)
        }
    }
)