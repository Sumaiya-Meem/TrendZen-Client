
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
    const axiosSecure = useAxiosSecure();
    const { isLoading, refetch, data:users =[]} = useQuery({
        queryKey: ['userData'],
        queryFn: async () =>
        {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
      })
      return [users,isLoading,refetch]
};

export default useUser;