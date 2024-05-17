import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    newProduct: [],
    saleProducts: [],
}

export const productSlice = createSlice({
    name:"productSlice",
    initialState,
    reducers:{
        ListProduct:(state,action) => {
            return {
                ...state, 
                products: action.payload
            }
        },
        NewProduct:(state,action) => {
            return {
                ...state, 
                newProduct: action.payload
            }
        },
        SaleProducts:(state,action) => {
            return {
               ...state, 
               saleProducts: action.payload
            }
        }
    }
})

export const {ListProduct,NewProduct,SaleProducts} = productSlice.actions;
export default productSlice.reducer;