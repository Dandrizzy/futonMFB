import supabase from "../../Services/supabase";
export const useGetTransactionApi = ({id}) => {

// Function to retrieve messages for a chat ID
async function getTransactionHistory() {
  const { data, error } = await supabase
    .from('transactions')
    .select('*')
    .eq('userId', id)
    .order('created_at', { ascending: false, })
    .range(0, 10);

  if (error) {
    console.log('Supabase error:', error.message);
    return [];
  }

  return data;
}
return {getTransactionHistory}
}