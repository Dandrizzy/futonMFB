import { useQuery } from "@tanstack/react-query";
import {  useGetTransactionApi } from "./useGetTransactionApi";

export const useGetTransaction = ({id}) => {
 const {getTransactionHistory} = useGetTransactionApi({id})
 const {data, isLoading} = useQuery({
  queryKey: ['transaction'],
  queryFn: getTransactionHistory
 })
 return {data, isLoading}
}