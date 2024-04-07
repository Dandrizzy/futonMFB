import { adminAuth } from '../../../Services/supabase';
export const useDeleteUserApi = ({ id }) => {
  const DeleteUser = async () => {
    const { data, error } = await adminAuth.deleteUser(id);
    if (error) throw new Error(error.message);
    return data;
  };
  return { DeleteUser };
};
