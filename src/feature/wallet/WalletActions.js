import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const endPoint = process.env.REACT_APP_API_URL

export const getUserBalance = createAsyncThunk(
    "getUserBalance",
    async({user}, rejectWithValue) => {
        try {
            const config = {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem("token")}`
                  
                },
              }
              const res = await axios.get(
                `${endPoint}/wallets/${user.id}/`,
                config
              )
              return res
        } catch (error) {
            console.log(error)
        }
    }
)