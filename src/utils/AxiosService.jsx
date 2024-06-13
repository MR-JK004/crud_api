import axios from "axios";

const AxiosService = axios.create({
    baseURL:"https://666a7d217013419182cf73f2.mockapi.io",
    headers:{
        "Content-Type":"application/json"
    }
})

export default AxiosService