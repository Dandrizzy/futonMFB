import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useDeleteUser = ({ fn }) => {
  const queryClient = useQueryClient();
  const { mutate: deleteUser, isPending: isDeleting } = useMutation({
    mutationFn: fn,
    mutationKey: ['users'],
    onSuccess: () => {
      toast.success('Successfully deleted');
      queryClient.invalidateQueries({ queryKey: ['adminUsers'] });
    },
    onError: () => toast.error('User could not be deleted'),
  });

  return { deleteUser, isDeleting };
};
