import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useFollow = () => {
    const queryClient = useQueryClient();

    const{mutate:follow, isPending} = useMutation({
        mutationFn: async(userId) => {
            try {
                const res = await fetch(`/api/user/follow/${userId}`, {
                    method: 'POST',
                });
    
                const data = await res.json();
                if(!res.ok) {
                    throw new Error(error.message || "Something went wrong");
                }
                return data;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        onSuccess: () => {
            Promise.all([
                queryClient.invalidateQueries({querykey: ['suggestedUsers']}),
                queryClient.invalidateQueries({querykey: ['authUser']}),
            ]);
        },
        onError: (error) => {
            toast.error(eror.message);
        },
    });

  return (
    {follow, isPending}
  )
}

export default useFollow;