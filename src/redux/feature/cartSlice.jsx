import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

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
        toast.success("Added to cart", {
          duration: 1000,
          position: "bottom-center",
          autoClose: 15000,
        })  
        const item = {
          ...action.payload,
          quantity: 1,
        };
        localStorage.setItem("cartItems", JSON.stringify([...cartItem, item]));
        return {
          ...cartItem,
          cartItem: [...cartItem, item],
        };
        
      } else {
        const updateItem = cartItem.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        localStorage.setItem("cartItems", JSON.stringify(updateItem));
        return { ...state, cartItem: updateItem };
      }
    },
    reduceFromCart: (state, action) => {
      const { cartItem } = state;
      const item = cartItem.find((i) => i.id === action.payload);
      if (item.quantity > 1) {
        const updatedList = cartItem.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });
        localStorage.setItem("cartItems", JSON.stringify(updatedList));
        return {
          ...state,
          cartItem: updatedList,
        };
      } else {
        const updatedItems = cartItem.filter(
          (item) => item.id !== action.payload
        );
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
        return { ...state, cartItem: updatedItems };
      }
    },
    removeFromCart: (state, action) => {
      const { cartItem } = state;
      const updatedCart = cartItem.filter((item) => item.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));

      return {
        ...state,
        cartItem: updatedCart,
      };
    },
    loadCartFromStore: (state, action) => {
      return {
        cartItem: action.payload,
      };
    },
  },
});

export const {
  addToCart,
  reduceFromCart,
  removeFromCart,
  loadCartFromStore,
  updateOpenDrawer
} = cartSlice.actions;
export default cartSlice.reducer;
