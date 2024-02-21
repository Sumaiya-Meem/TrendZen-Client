import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";



            

const useSummerProduct = () => {
    const axiosSecure = useAxiosSecure();
    const { isLoading, refetch, data:allProperty =[]} = useQuery({
        queryKey: ['propertyData'],
        queryFn: async () =>
        {
            const res = await axiosSecure.get('/summer')
            return res.data;
        }
      })
      return [allProperty,isLoading,refetch]
};



export default useSummerProduct;