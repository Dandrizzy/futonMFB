import { adminAuth } from '../../../Services/supabase';

export const getUsersApi = async () => {
  const {
    data: { users },
    error,
  } = await adminAuth.listUsers();

  if (error) {
    console(error.message);
    throw new Error(error.message);
  }
  return { users };
};
