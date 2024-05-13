import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  productSlice  from "./feature/productSlice";
import cartSlice from "./feature/cartSlice";
import authentSlice from "./feature/authentSlice";
import drawerSlice from "./feature/drawerSlice";
import wishlistSlice from "./feature/wishlistSlice";

const reducer = combineReducers({
    productSlice,
    cartSlice,
    authentSlice,
    drawerSlice,
    wishlistSlice,
});
const store = configureStore({
    reducer,
})
export default store;