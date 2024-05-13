import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  wishlistItem: [],
};

const wishlistSlice = createSlice({
  name: "wishlistSlice",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const { wishlistItem } = state;
      if (wishlistItem.findIndex((item) => item.id === action.payload.id) === -1) {
        toast.success("Added to wishlist", {
          duration: 1000,
          position: "bottom-center",
          icon: "🚀"

        })  
        const item = {
          ...action.payload,
          quantity: 1,
        };
        localStorage.setItem("wishlistItem", JSON.stringify([...wishlistItem, item]));
        return {
          ...wishlistItem,
          wishlistItem: [...wishlistItem, item],
        };
      } 
    //   else {
    //     const updateItem = cartItem.map((item) =>
    //       item.id === action.payload.id
    //         ? { ...item, quantity: item.quantity + 1 }
    //         : item
    //     );
    //     return { ...state, cartItem: updateItem };
    //   }
    },
    removeFromWishlist: (state, action) => {
      const { wishlistItem } = state;
      const updatedCart = wishlistItem.filter((item) => item.id !== action.payload);
      toast.success("Added to wishlist", {
        duration: 1000,
        position: "bottom-center",
        icon: "🚀"

      })  
      return {
      
        ...state,
        wishlistItem: updatedCart,
      };
    },
  },
});

export const {
    addToWishlist,
    removeFromWishlist,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
