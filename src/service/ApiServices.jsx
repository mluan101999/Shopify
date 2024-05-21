import axios from "axios";
const URL = "https://dummyjson.com/products/";
// const URL = "https://65fbb5a414650eb2100a6bf9.mockapi.io/api/v1/product"
const URL_Category = "https://dummyjson.com/products/category"
const URL_Allproducts = "https://dummyjson.com/products?limit=100"
const URL_Categories = "https://dummyjson.com/products/categories"
const URL_Search = `https://dummyjson.com/products/search?q=`
const ApiService = {
    ApiTopProduct: async () => {
        return await axios.get(URL)
    },
    ApiDetail: async (id) => {
        return await axios.get(`${URL}/${id}`)
    },
    ApiSimilar: async (category) => {
        return await axios.get(`${URL_Category}/${category}`)
    },
    ApiAllProduct: async ( ) => {
        return await axios.get(URL_Allproducts)
    },
    ApiAllCategory: async ( ) => {
        return await axios.get(URL_Categories)
    },
    ApiSearchProduct: async (search) => {
        return await axios.get(`${URL_Search}${search}`)
    }
}

export default ApiService
