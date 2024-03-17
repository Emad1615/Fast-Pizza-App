import { createSlice } from "@reduxjs/toolkit"
const initialState={
    //cart:[]
    cart:[
        {
            pizzaId:12,
            name:"Mediterranean",
            quantity:2,
            unitPrice:16,
            totalPrice:32
        }
    ]
}
const cartSlice=createSlice({
    initialState:initialState,
    name:"cart",
    reducers:{

        addItem(state,action){
            // Add new Item
            state.cart.push(action.payload)
        },
        deleteItem(state,action){
          state.cart=state.cart.filter(item=>item.pizzaId!==action.payload);
        },
        increaseItemQuantity(state,action){
            const item=state.cart.find(item=>item.pizzaId===action.payload);
            item.quantity++;
            item.totalPrice=item.quantity*item.unitPrice;
        },
        decreaseItemQuantity(state,action){
            const item=state.cart.find(item=>item.pizzaId===action.payload);
            if(item.quantity===1) return;
            item.quantity--;
            item.totalPrice=item.quantity*item.unitPrice;
        },
        clearItem(state,action){
            state.cart=[];
        },
    }
})
export const {addItem,deleteItem,increaseItemQuantity,decreaseItemQuantity,clearItem}=cartSlice.actions
export default cartSlice.reducer;