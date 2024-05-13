import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenDrawer: false,
};

const drawerSlice = createSlice({
  name: "drawerSlice",
  initialState,
  reducers: {
    updateOpenDrawer: (state, action) => {
      return {
        ...state,
        isOpenDrawer: action.payload,
      };
    },
  },
});

export const {
  updateOpenDrawer
} = drawerSlice.actions;
export default drawerSlice.reducer;
