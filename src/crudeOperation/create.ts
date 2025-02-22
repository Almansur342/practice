import { TUser } from "@/typeScriptType/Type";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "createUser",
   async (data:Partial<TUser>,{rejectWithValue}) => {
  const res = await fetch("https://67b8a6bb699a8a7baef4d1b0.mockapi.io/allUsers",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
  });
  try{
      const result = await res.json();
      return result;
  } catch(err){
   return rejectWithValue(err)
  }
})