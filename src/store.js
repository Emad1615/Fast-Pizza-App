import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user/userSilce'
import cartRedcer from './features/cart/cartSlice'

const store=configureStore({
    reducer:{
        user:userReducer,
        cart:cartRedcer
    }
})
export default store