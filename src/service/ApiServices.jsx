import axios from "axios";
const URL = "https://dummyjson.com/products/"

const ApiService = {
    ApiTopProduct: async () => {
        return await axios.get(URL)
    },
    
}

export default ApiService
