import { createUser } from '@/crudeOperation/create';
import { deleteUser } from '@/crudeOperation/DeleteUser';
import { showUser } from '@/crudeOperation/ShowUsers';
import { TUser, TuserDetail } from '@/typeScriptType/Type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
const initialState : TuserDetail = {
  users:[],
  loading:false,
  error: null,
};

const handlePending = (state: TuserDetail) => {
  state.loading = true;
  state.error = null;
};

// Helper function to handle rejected state
const handleRejected = (state: TuserDetail, action: PayloadAction<unknown>) => {
  state.loading = false;
  state.error = action.payload as string;
};

// slice
export const userDetail = createSlice({
  name:'userDetail',
  initialState,
  reducers:{
  },
  extraReducers:(builder)=>{
    builder
    // create user
    .addCase(createUser.pending,handlePending)
    .addCase(createUser.fulfilled, (state, action: PayloadAction<TUser>) => {
      state.loading = false;
      state.users.push(action.payload); 
    })
    .addCase(createUser.rejected, handleRejected)
     
    // show user
    .addCase(showUser.pending,handlePending)
    .addCase(showUser.fulfilled, (state, action: PayloadAction<TUser[]>) => {
      state.loading = false;
      state.users = action.payload; 
    })
    .addCase(showUser.rejected, handleRejected)

    // delete User
    .addCase(deleteUser.pending,handlePending)
    .addCase(deleteUser.fulfilled, (state, action: PayloadAction<TUser>) => {
      state.loading = false;
      const {id} = action.payload;
      if(id){
        state.users = state.users.filter((p)=>p.id!=id); 
      }
    })
    .addCase(deleteUser.rejected, handleRejected)
  }
})

export default userDetail.reducer;