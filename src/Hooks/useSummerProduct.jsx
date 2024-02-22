import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";           

const useSummerProduct = () => {
    const axiosSecure = useAxiosSecure();
    const { isLoading, refetch, data:allProducts =[]} = useQuery({
        queryKey: ['propertyData'],
        queryFn: async () =>
        {
            const res = await axiosSecure.get('/products')
            return res.data;
        }
      })
      return [allProducts,isLoading,refetch]
};



export default useSummerProduct;