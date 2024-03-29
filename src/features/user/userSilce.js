import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"


export const fetchAddress=createAsyncThunk("user/fetchAddress",async function (){

})

const initialState={
    username:'',
    createdAt:''
}
const userSlice=createSlice({
    initialState:initialState,
    name:"user",
    reducers:{
        updateUser(state,action){
            state.username=action.payload;
            state.createdAt=new Date().toISOString()
        }
    }
})
export const{updateUser}=userSlice.actions;
export default userSlice.reducer;