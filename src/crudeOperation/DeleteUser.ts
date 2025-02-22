import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async(id:string,{rejectWithValue})=>{
    const res = await fetch(`https://67b8a6bb699a8a7baef4d1b0.mockapi.io/allUsers/${id}`,
    {method:"DELETE"}
    );
    try{
     const result = await res.json();
     return result;
    }catch(err){
      return rejectWithValue(err)
    }
  }
)