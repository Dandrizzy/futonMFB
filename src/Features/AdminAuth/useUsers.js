import { useQuery } from '@tanstack/react-query';
import { getUsersApi } from './getUsersApi';

export const useUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['adminUsers'],
    queryFn: getUsersApi,
  });
  return { data, isLoading };
};
