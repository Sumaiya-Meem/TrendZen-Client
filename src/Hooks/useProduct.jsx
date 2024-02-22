import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";           

const useProduct = () => {
    const axiosSecure = useAxiosSecure();
    const { isLoading, refetch, data:products =[]} = useQuery({
        queryKey: ['propertyData'],
        queryFn: async () =>
        {
            const res = await axiosSecure.get('/products')
            return res.data;
        }
      })
      return [products,isLoading,refetch]
};




export default useProduct;