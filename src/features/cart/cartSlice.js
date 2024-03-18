import { createSlice } from "@reduxjs/toolkit"
const initialState={
    cart:[]
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
            // if(item.quantity===1) return;
            item.quantity--;
            item.totalPrice=item.quantity*item.unitPrice;
            if(item.quantity===0) cartSlice.caseReducers.deleteItem(state,action);

        },
        clearItem(state,action){
            state.cart=[];
        },
    }
})
export const {addItem,deleteItem,increaseItemQuantity,decreaseItemQuantity,clearItem}=cartSlice.actions
export default cartSlice.reducer;

export const totalPrice=(store)=>store.cart.cart.reduce((sum,cart)=> sum+=cart.totalPrice,0);

export const totalQuantity=(store)=>store.cart.cart.reduce((sum,cart)=> sum+=cart.quantity,0);

export const getCart=(store)=>store.cart.cart;
export const getItemQuantityById=(id)=>(store)=>store.cart.cart.find(item=>item.pizzaId===id)?.quantity ?? 0; 