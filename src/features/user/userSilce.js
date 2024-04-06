import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import { getPosition } from "../../utils/helper"
import { getAddress } from "../../services/apiGeoCoding";


export const fetchAddress=createAsyncThunk("user/fetchAddress", async function (){
    const positionObj=await getPosition();
    const position={
        latitude:positionObj.coords.latitude,
        longitude:positionObj.coords.longitude,
    }
    const addressObj=await getAddress(position);
    const address=`${addressObj.locality}, ${addressObj.city}, ${addressObj.postcode}, ${addressObj.countryName}`
    return {position,address}
})
const initialState={
    username:'',
    createdAt:'',
    status:"idle",
    address:"",
    position:{},
    error:"",
}
const userSlice=createSlice({
    initialState:initialState,
    name:"user",
    reducers:{
        updateUser(state,action){
            state.username=action.payload;
            state.createdAt=new Date().toISOString()
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAddress.pending,(state,action)=>{
            state.status="loading"
        })
        .addCase(fetchAddress.fulfilled,(state,action)=>{
            state.status="idle";
            state.address=action.payload.address;
            state.position=action.payload.position;
        })
        .addCase(fetchAddress.rejected,(state,action)=>{
            state.status="error";
            state.error='There was a problem getting your address. Make sure to fill this field!'
        })
    }
})
export const{updateUser}=userSlice.actions;
export default userSlice.reducer;