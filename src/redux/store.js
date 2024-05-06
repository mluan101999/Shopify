import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  productSlice  from "./feature/productSlice";
import cartSlice from "./feature/cartSlice";

const reducer = combineReducers({
    productSlice,
    cartSlice,

});
const store = configureStore({
    reducer,
})
export default store;