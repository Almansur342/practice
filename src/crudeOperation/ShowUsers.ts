import { createAsyncThunk } from "@reduxjs/toolkit";

export const showUser = createAsyncThunk(
  "showUser",
  async(_,{rejectWithValue})=>{
    const res = await fetch("https://67b8a6bb699a8a7baef4d1b0.mockapi.io/allUsers");
    try{
     const result = await res.json();
     return result;
    }catch(err){
      return rejectWithValue(err)
    }
  }
)