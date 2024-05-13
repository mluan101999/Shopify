import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  isLogin: localStorage.getItem('username') !== "" && localStorage.getItem('username'),
  isOpenDialogLogin: false,
  username: localStorage.getItem('username') ?? "",
};

const authentSlice = createSlice({
  initialState,
  name: "authentSlice",
  reducers: {
    doLogin: (state, action) => {
      if(action.payload.username === "mluan99" && action.payload.password === "291099"){
        localStorage.setItem("username",action.payload.username);
        toast.success("Login success", {
          duration: 1000,
          position: "bottom-center",
        });
        return{
          ...state,
          isOpenDialogLogin: false,
          isLogin:true,
          username: action.payload.username       
        }  
      }else {
        toast.error("Login Failed", {
          duration: 1000,
          position: "bottom-center",
        });
      }
    },
    updateStateLogin: (state, action) => {
      return {
        ...state,
        isOpenDialogLogin: action.payload,
      };
    },
    isLogout:(state, action) => {
      localStorage.removeItem('username');
      return {
        isLogin: false,
        isOpenDialogLogin: false,
        username: "",
      }
    }
  },
});

export const { doLogin, updateStateLogin,isLogout } = authentSlice.actions;
export default authentSlice.reducer;
