import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";           

const useCart= () => {
    const axiosSecure = useAxiosSecure();
    const { isLoading, refetch, data:cart =[]} = useQuery({
        queryKey: ['propertyData'],
        queryFn: async () =>
        {
            const res = await axiosSecure.get('/myCart')
            return res.data;
        }
      })
      return [cart,isLoading,refetch]
};


export default useCart;