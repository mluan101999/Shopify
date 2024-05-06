import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { cartItem } = state;
      if (cartItem.findIndex((item) => item.id === action.payload.id) === -1) {
        const item = {
          ...action.payload,
          quantity: 1,
        };
        return {
          ...cartItem,
          cartItem: [...cartItem,item],
        };
      } else {
        const updateItem = cartItem.map((item) => 
        item.id === action.payload.id ? {...item,quantity:item.quantity +1} : item
        );
        return {...state, cartItem: updateItem}
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
