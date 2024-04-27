import axios from "axios";
const URL = "https://dummyjson.com/products/"

const ApiService = {
    ApiTopProduct: async () => {
        return await axios.get(`${URL}`,{
            params: {
                q: "",
                limit: 8,
                skip:0,
            }
        })
    },
    ApiNewProduct: async () => {
        return await axios.get(`${URL}`,{
            params: {
                q: "",
                limit: 8,
                skip:8,
            }
        })
    }
}

export default ApiService
