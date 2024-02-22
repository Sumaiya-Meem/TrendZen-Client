import axios from "axios";

const axiosSecure = axios.create({
    baseURL:'https://trend-zen-server-side.vercel.app'
    // baseURL:'http://localhost:5000'

})
const useAxiosSecure = () => {
    return  axiosSecure;
};

export default useAxiosSecure;